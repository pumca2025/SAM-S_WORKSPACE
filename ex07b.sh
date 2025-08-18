gawk 'BEGIN {
print mark < "-"
if(mark>=90) print "A+"
if(mark>=80) print "A"
if(mark>=70) print "B+"
if(mark>=60) print "B"
if(mark>=50) print "C+"
else print "FAIL"
}'