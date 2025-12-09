class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        self.items.append(item)

    def dequeue(self):
        if not self.is_empty():
            return self.items.pop(0)
        else:
            print("Queue is empty.")
            return None

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)

    def front(self):
        if not self.is_empty():
            return self.items[0]
        else:
            print("Queue is empty.")
            return None

    def rear(self):
        if not self.is_empty():
            return self.items[-1]
        else:
            print("Queue is empty.")
            return None

    def display(self):
        print("Queue:", self.items)


def main():
        queue = Queue()

        print("\nMenu:")
        print("1. Enqueue element")
        print("2. Dequeue element")
        print("3. Check if the queue is empty")
        print("4. Display queue size")
        print("5. Display front element")
        print("6. Display rear element")
        print("7. Display queue")
        print("8. Exit")

        while True:
            choice = int(input("Enter your choice: "))

            if choice == 1:
                item = input("Enter the element to enqueue: ")
                queue.enqueue(item)
                print(f"{item} enqueued.")

            elif choice == 2:
                dequeued_item = queue.dequeue()
                if dequeued_item is not None:
                    print(f"{dequeued_item} dequeued.")

            elif choice == 3:
                print("Is the queue empty?:", queue.is_empty())

            elif choice == 4:
                print("Queue size:", queue.size())

            elif choice == 5:
                front_element = queue.front()
                if front_element is not None:
                    print("Front element:", front_element)

            elif choice == 6:
                rear_element = queue.rear()
                if rear_element is not None:
                    print("Rear element:", rear_element)

            elif choice == 7:
                queue.display()

            elif choice == 8:
                print("Exiting the program.")
                break

            else:
                print("Invalid choice. Please enter a valid option.")


if __name__ == "__main__":
    main()
