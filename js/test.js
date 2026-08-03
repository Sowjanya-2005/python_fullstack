console.log("hello world")
let student_name = "sowjanya"
console.log("student name is:"+ student_name)
let student_age = 20
let course_name = "python full stack"
console.log("student age is:"+ student_age, "console name is:" + course_name)
let fee = 1000
let discount = 10
let discounted_fee = fee - (fee*discount/100)
console.log("discounted fee is:" + discounted_fee)

let age=20
if(age>=18){
    console.log("eligible for admission")
}
else{
    console.log("not eligible for admission")
}
for(let i=1;i<=5;i++){
     console.log("iteration number:" + i)
}

const pi = 3.14
console.log("value of pi is:" + pi)
let student = {
    name: "sowjanya",
    age: 20,
    course:"python full stack",
    fee: 10000
}
console.log("student details: ",student)

function greetstudent(name){
    console.log("hello" + name + ",welcome to nriit learning management system")
}
greetstudent(student_name)
function squareNumber (num) {
    return num * num;
}
x=squareNumber(5);
console.log("square of 5 is: ", x)
function checkOddeven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console .log("Check if 7 is odd or even: ", checkOddEven (7));
   
