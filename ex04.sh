trap echo "Signal caught! Exiting......';exit" SIGINT
echo "This i sthe demonstration of script control commands"
echo "Ebter a number (negative to exit the script ):"
read num
if [ $num -lt 0 ]; then
echo "You entered a negative number Exiting......!"
exit 1
fi
echo "For loop demonstration with continue........"
for i in 1 2 3 4 5 
do 
if [ $i -eq 3 ]; then
echo "Skipping the iteration $i using continue.." 
continue
fi
echo "iteration $i"
done

echo "While loop demonstration with break.."
c=5
while [ $c -gt 0 ]; do
echo "Counter is  $c"
if [ $c -eq 3 ]; then
echo "Breaking the loop when the counter is $c"
break
fi
c=$(($c-1))
done
echo "Script executed successfully"  