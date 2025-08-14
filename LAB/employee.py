staffs=[]
def calculateSalary(basic,exp):
    if(exp>=5):
        increment=0.1*basic
    elif(exp>=3):
        increment=0.07*basic
    else:
        increment=0.05*basic
    da=round(0.21*basic,2)
    hra=round(0.14*basic,2)
    pf=round(0.25*basic,2)
    tax=round(0.15*basic,2)
    ded=pf+tax
    gross=basic+da+hra+increment
    net=gross-ded
    return [da,hra,pf,tax,ded,gross,net]    
def addStaff():
    Emp_Name=input("Enter the employee name :")
    Emp_id=input("Enter Employee ID :")
    des=input("Enter Designation :")
    exp=int(input("Enter the experience :"))
    basic=float(input("Enter the basic salary :  "))
    sal=calculateSalary(basic,exp)
    staff={
        'Emp_id':Emp_id,
        'name':Emp_Name,
        'Designation':des,
        'Experience':exp,
        'Basic_Pay':basic,
        'da':sal[0],
        'hra':sal[1],
        'pf':sal[2],
        'tax':sal[3],
        'ded':sal[4],
        'Gross_pay':sal[5],
        'Net_pay':sal[6],
    }
    print(sal)
def menu():
    while True:
        print('''
            1. Add Staff
            2. Show details
            3. Exit
    ''')
        ch=(input("What doyou want to do (1/2/3) :"))
        if(ch=='1'):
            addStaff()
        elif(ch=='2'):
            show()
        elif(ch=='3'):
            break
        else:
            print("Invalid Choice.....")
            continue
menu()