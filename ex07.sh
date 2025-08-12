echo "1. Replacing or substituting String"
echo
sed 's/unix/Linux/' sed.txt
echo
echo "2. replacing the nth occurrence of pattern in a line"
echo 
sed 's/unix/Linux/2' sed.txt
echo
echo "3. replacing all the occurances of the pattern in a line"
echo
sed 's/unix/Linux/g' sed.txt
echo
echo "4. replacing from nth occurrence to all occurrence in a line"
echo
sed 's/unix/Linux/3g' sed.txt
echo
echo "5. replacing string on a specific line number"
echo
sed '3 s/unix/Linux/' sed.txt
echo
echo "6. Duplicate the replaced line with /p flag"
echo
sed 's/unix/Linux/p' sed.txt
echo
echo "7.printing only replaced Lines"
echo
sed -n 's/unix/Linux/p' sed.txt
echo
echo "8. Replacing string on a range of lines"
echo
sed '2,$ s/unix/Linux/' sed.txt
echo
echo "9.Deleting line from a paricular file"
echo
sed '2,4d' sed.txt
echo