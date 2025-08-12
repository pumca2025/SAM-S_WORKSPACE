fruits_file=$(cat fruit.txt | grep App.e)
echo "1.Using to find all the original word whereas given word is App.e"
echo "Output:  $fruit_file"
fruits_file=$(cat fruit.txt | grep App*le)
echo "2.Using * to find all fruits name of Ap one after another in it"
echo "Output:  $fruits_file "
fruits_file=$(cat fruit.txt | grep ^B)
echo "3.using to find out all the Fruits name starting with B"
echo "Output:  $fruits_file"
fruits_file=$(cat fruit.txt | grep "\ ")
echo "4.using to find out all the fruits name that has single space in their full name"
echo "Output:  $fruits_file"
fruits_file=$(cat fruit.txt | grep -E "ch?" )
echo "5.using ? to find out all the Fruits name that has 'ch' in it"
echo "Output:  $fruits_file"
fruits_file=$(cat fruit.txt | grep -E "(fruit)")
echo "6.using () to find out aff fruits name that has word 'fruit in it"
echo