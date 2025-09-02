
import React, { useState, useCallback, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Participant, EventRegistrations } from './types';
import { MAX_TEAM_MEMBERS, MIN_TEAM_MEMBERS, MORNING_EVENTS, EVENING_EVENTS, PARTICIPANTS_PER_EVENT_LIMIT } from './constants';
import { useFormValidation } from './hooks/useFormValidation';
import { generateTeamMotto } from './services/geminiService';

import Header from './components/Header';
import TeamInfoForm from './components/TeamInfoForm';
import ParticipantDetailsForm from './components/ParticipantForm';
import SubmissionSummary from './components/SubmissionSummary';
import { ExclamationTriangleIcon } from './components/icons/ExclamationTriangleIcon';
import { XMarkIcon } from './components/icons/XMarkIcon';

const allEvents = [...MORNING_EVENTS, ...EVENING_EVENTS];

const App: React.FC = () => {
    const [teamName, setTeamName] = useState<string>('');
    const [participants, setParticipants] = useState<Participant[]>([]);
    const [eventRegistrations, setEventRegistrations] = useState<EventRegistrations>({});
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [teamMotto, setTeamMotto] = useState<string>('');
    const [submissionError, setSubmissionError] = useState<string | null>(null);

    const { errors, validateForm } = useFormValidation(teamName, participants, eventRegistrations);

    const handleMemberCountChange = (count: number) => {
        const newCount = Math.max(MIN_TEAM_MEMBERS, Math.min(MAX_TEAM_MEMBERS, count));
        const currentCount = participants.length;

        if (newCount > currentCount) {
            const newParticipants: Participant[] = Array.from({ length: newCount - currentCount }, () => ({
                id: uuidv4(),
                name: '',
                registrationNumber: '',
            }));
            setParticipants(prev => [...prev, ...newParticipants]);
        } else if (newCount < currentCount) {
            const updatedParticipants = participants.slice(0, newCount);
            setParticipants(updatedParticipants);
            
            const removedParticipantIds = new Set(participants.slice(newCount).map(p => p.id));
            const newEventRegistrations: EventRegistrations = {};
            for (const eventId in eventRegistrations) {
                const filteredIds = eventRegistrations[eventId].filter(pId => !removedParticipantIds.has(pId));
                if (filteredIds.length > 0) {
                    newEventRegistrations[eventId] = filteredIds;
                }
            }
            setEventRegistrations(newEventRegistrations);
        }
    };

    const handleParticipantDetailsChange = useCallback((updatedParticipant: Participant) => {
        setParticipants(prev =>
            prev.map(p => (p.id === updatedParticipant.id ? updatedParticipant : p))
        );
    }, []);

    const handleEventRegistrationChange = useCallback((eventId: string, participantIds: string[]) => {
        setEventRegistrations(prev => {
            const newRegistrations = { ...prev };
            const finalIds = Array.from(new Set(participantIds.filter(Boolean)));
            if (finalIds.length > 0) {
                newRegistrations[eventId] = finalIds;
            } else {
                // Keep the event key even if empty, to keep the card visible
                newRegistrations[eventId] = [];
            }
            return newRegistrations;
        });
    }, []);

    const handleAddEvent = (eventId: string) => {
        if (eventId && !eventRegistrations.hasOwnProperty(eventId)) {
            setEventRegistrations(prev => ({
                ...prev,
                [eventId]: []
            }));
        }
    };

    const handleRemoveEvent = (eventId: string) => {
        setEventRegistrations(prev => {
            const newRegistrations = { ...prev };
            delete newRegistrations[eventId];
            return newRegistrations;
        });
    };
    
    const participantEventCounts = useMemo(() => {
        const counts: Record<string, { morning: number; evening: number }> = {};
        participants.forEach(p => {
            counts[p.id] = { morning: 0, evening: 0 };
        });

        const morningEventIds = new Set(MORNING_EVENTS.map(e => e.id));

        for (const eventId in eventRegistrations) {
            const participantIds = eventRegistrations[eventId];
            const isMorning = morningEventIds.has(eventId);
            participantIds.forEach(pId => {
                if (counts[pId]) {
                    if (isMorning) counts[pId].morning++;
                    else counts[pId].evening++;
                }
            });
        }
        return counts;
    }, [participants, eventRegistrations]);
    
    const isParticipantDisabledForCategory = useCallback((participantId: string, category: 'morning' | 'evening'): boolean => {
        const counts = participantEventCounts[participantId];
        if (!counts) return false;
        return category === 'morning' ? counts.morning >= 1 : counts.evening >= 1;
    }, [participantEventCounts]);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmissionError(null);
        if (!validateForm()) {
            setSubmissionError('Please fix the errors before submitting.');
            return;
        }

        setIsSubmitting(true);
        try {
            const motto = await generateTeamMotto(teamName, participants, allEvents, eventRegistrations);
            setTeamMotto(motto);
            setIsSubmitted(true);
        } catch (error) {
            console.error("Failed to generate team motto:", error);
            setSubmissionError("There was an issue with the AI service. Please try submitting again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const participantOptions = participants.filter(p => p.name && p.registrationNumber);
    
    const availableEvents = useMemo(() => {
        const registeredEventIds = new Set(Object.keys(eventRegistrations));
        return allEvents.filter(event => !registeredEventIds.has(event.id));
    }, [eventRegistrations]);

    const morningEventIds = useMemo(() => new Set(MORNING_EVENTS.map(e => e.id)), []);

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-8 font-sans">
            <Header />
            <main className="bg-white rounded-xl shadow-2xl overflow-hidden mt-8">
                {isSubmitted ? (
                    <SubmissionSummary
                        teamName={teamName}
                        participants={participants}
                        teamMotto={teamMotto}
                        eventRegistrations={eventRegistrations}
                    />
                ) : (
                    <form onSubmit={handleSubmit} className="p-6 sm:p-8 lg:p-10" noValidate>
                        <TeamInfoForm
                            teamName={teamName}
                            memberCount={participants.length}
                            onTeamNameChange={setTeamName}
                            onMemberCountChange={handleMemberCountChange}
                            error={errors.teamName}
                        />

                        <hr className="my-8 border-gray-200" />

                        {participants.length > 0 && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">Participant Details</h2>
                                <p className="text-gray-600 mb-6">Enter each participant's name and unique registration number.</p>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
                                    {participants.map((participant, index) => (
                                        <ParticipantDetailsForm
                                            key={participant.id}
                                            participant={participant}
                                            participantIndex={index}
                                            onChange={handleParticipantDetailsChange}
                                            errors={errors.participants?.[participant.id]}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        <hr className="my-8 border-gray-200" />

                        {participants.length > 0 && (
                             <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">Event Registration</h2>
                                <p className="text-gray-600 mb-6">Add events and assign participants. Each participant can join one morning and one evening event.</p>
                                
                                <div className="mb-6">
                                     <label htmlFor="add-event-select" className="block text-sm font-medium text-gray-700 mb-1">
                                        Add an Event
                                    </label>
                                    <select
                                        id="add-event-select"
                                        value=""
                                        onChange={(e) => handleAddEvent(e.target.value)}
                                        className="block w-full md:w-1/2 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm"
                                        disabled={availableEvents.length === 0}
                                        aria-label="Add an event to register"
                                    >
                                        <option value="" disabled>
                                            {availableEvents.length === 0 ? 'All events added' : '-- Select an event to add --'}
                                        </option>
                                        {availableEvents.map(event => (
                                            <option key={event.id} value={event.id}>{event.name}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
                                    {Object.keys(eventRegistrations).map(eventId => {
                                        const event = allEvents.find(e => e.id === eventId);
                                        if (!event) return null;
                                        
                                        const category = morningEventIds.has(eventId) ? 'morning' : 'evening';
                                        const selectedParticipants = eventRegistrations[event.id] || [];
                                        const eventError = errors.eventRegistrations?.[event.id];

                                        return (
                                            <div key={event.id} className={`bg-gray-50 p-5 rounded-lg border shadow-sm relative ${eventError ? 'border-red-400' : 'border-gray-200'}`}>
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveEvent(event.id)}
                                                    className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full transition-colors"
                                                    aria-label={`Remove ${event.name} event`}
                                                >
                                                    <XMarkIcon className="w-5 h-5" />
                                                </button>
                                                <h4 className="font-bold text-lg text-gray-800 mb-4">{event.name}</h4>
                                                <div className="space-y-4">
                                                    {Array.from({ length: PARTICIPANTS_PER_EVENT_LIMIT }).map((_, index) => {
                                                        const selectedValue = selectedParticipants[index] || '';
                                                        return (
                                                            <div key={index}>
                                                                <label htmlFor={`${event.id}-participant-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                                                                    Participant {index + 1}
                                                                </label>
                                                                <select
                                                                    id={`${event.id}-participant-${index}`}
                                                                    value={selectedValue}
                                                                    onChange={(e) => {
                                                                        const newSelection = [...selectedParticipants];
                                                                        newSelection[index] = e.target.value;
                                                                        handleEventRegistrationChange(event.id, newSelection);
                                                                    }}
                                                                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm"
                                                                    disabled={participantOptions.length === 0}
                                                                >
                                                                    <option value="">-- Select Participant --</option>
                                                                    {participantOptions.map(p => {
                                                                        const isSelectedElsewhereInEvent = selectedParticipants.includes(p.id) && p.id !== selectedValue;
                                                                        const isDisabledForCategory = isParticipantDisabledForCategory(p.id, category);
                                                                        const isDisabled = isSelectedElsewhereInEvent || isDisabledForCategory;
                                                                        
                                                                        return (
                                                                            <option key={p.id} value={p.id} disabled={isDisabled}>
                                                                                {p.name} ({p.registrationNumber})
                                                                            </option>
                                                                        );
                                                                    })}
                                                                </select>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                                {eventError && <p className="mt-2 text-sm text-red-600">{eventError}</p>}
                                            </div>
                                        );
                                    })}
                                </div>
                                {Object.keys(eventRegistrations).length === 0 && (
                                    <div className="text-center py-10 px-4 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
                                        <p className="text-gray-500 font-medium">No events added yet.</p>
                                        <p className="text-gray-500">Use the dropdown above to add events to your team's registration.</p>
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col items-center">
                             {submissionError && (
                                <div className="mb-4 text-center text-red-600 font-medium flex items-center">
                                    <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
                                    {submissionError}
                                </div>
                            )}
                            <button
                                type="submit"
                                disabled={isSubmitting || participants.length === 0}
                                className="w-full sm:w-auto bg-indigo-600 text-white font-bold py-3 px-12 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:scale-105"
                            >
                                {isSubmitting ? 'Generating Motto & Submitting...' : 'Register Team'}
                            </button>
                        </div>
                    </form>
                )}
            </main>
             <footer className="text-center mt-8 text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Team Event Registrar. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;
