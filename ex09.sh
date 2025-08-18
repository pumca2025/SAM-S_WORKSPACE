diskspace(){
    clear
    df -k
}
diskspace
whoseon(){
    clear
    whoami
}
whoseon
memusage(){
    clear
    cat /proc/meminfo
}
memusage
menu(){
    clear
    echo
    echo "\t\t\t Sys Admin Menu \n"
    echo "\t\t 1.Display disk space"
    echo "\t\t 2.Display logged users "
    echo "\t\t 3.Display memory usage"
    echo "\t\t 4.Exit Program \n\n"
    echo
    echo "\t\t Enter option"
    read option
    echo
}
menu
while [ True ]
do
menu
case $option in 
4)
break ;;
1)
diskspace ;;
2)
whoseon ;;
3)
memusage ;;
*)
clear
echo "Wrong Selection"
esac
echo "\n\n \t\t Hit any key to continue"
read line
done
clear