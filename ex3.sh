read -p "Enter the filename contains IP Address:" fileName
echo $fileName
if [ ! -f "$fileName" ]
then
echo "File Not found"
exit 1
fi
while IFS= read -r ip
do
if [ -n "$ip" ]
then
ping -c 1w 1 "$ip" &>/dev/null
if [ $? -eq 0 ]
then
echo "IP $ip is online"
else
echo "IP $ip is offline"
fi
fi
done <"$fileName"