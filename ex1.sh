read -p "Enter the Date 1 :" d1
read -p "enter the Date 2 :" d2
days=$((($(date -d $d1 +%s)-$(date -d $d2 +%s))/86400))
if [ "$days" -lt 0 ];then
    days=$((-1 * $days))
fi
echo "The differecnce between these two days is $days "
