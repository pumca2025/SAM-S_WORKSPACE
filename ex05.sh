fibo(){
a=0
b=1
c=0
echo "Fibonacci for $1 terms is :"
for i in $(seq 1 $1)
do
echo "$c"
c=$((a+b))
b=$a
a=$c
done
}
echo -n "Enter the fibonacci number :"
read num
fibo "$num"