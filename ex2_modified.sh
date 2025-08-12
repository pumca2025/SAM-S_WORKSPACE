echo "Enter the base ip address:"
read base_ip
echo "enter the start of ip range:"
read start_ip
echo "Enter the end of ip range"
read end_ip
if [ -z "$base_ip" ] || [ -z "$start_ip" ] || [ -z "$end_ip" ]
then
echo "Invalid Ip address"
exit 1
fi
for ip in $(seq $start_ip $end_ip)
do
current_ip="$base_ip.$ip"
ping -c 1 -w 1 "$current_ip" &>/dev/null
if [ $? -eq 0 ]
then
echo "The IP address $ip is Online"
else
echo "The IP address $ip is Offline"
fi
done