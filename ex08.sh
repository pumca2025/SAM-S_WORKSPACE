DATE=$(date +%y%m%d)
read -p "GIve name to the archieved file"
FILE=$filr$DATE.tgz
read -p "Enter the file name :" source
read -p "Enter the Destination path :" des
DESTINATION=$des/$FILE
if [ -f $source ]
then
echo
else
echo "$source does not exist backup failed"
exit
fi
FILE_NO=1
exec < $source
read FILE_NAME
while [ $? -eq 0 ]
do
if [ -f $FILE_NAME ] || [ -d $FILE_NAME ]
then
FILE_LIST="$FILE_LIST $FILE_NAME"
else
echo "$FILE_NAME doesn't exist, thus it is not included"
echo "BACKUP is still on process"
echo
fi
FILE_NO=$[ $FILE_NO+1 ]
read FILE_NAME
done
echo "Starting Arcive...."
tar -czf $DESTINATION $FILE_LIST 2>/dev/null
echo "Archive completed at $DESTINATION"
exit 