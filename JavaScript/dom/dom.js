//print values in the console :-
console.log('this ia a log!')
console.warn('this is a warning!')
console.error('this is  a error!')


//data types :-
// 1. primitive datatypes (PDTs)
variable_one =100
console.log(variable_one); 
console.log(typeof(variable_one));

//string
variable_one="welcome to JS"
console.log(variable_one);
console.log(typeof(variable_one));

//boolean
variable_two=true
console.log(variable_two)

//null
variable_three=null
console.log(variable_three)
console.log(typeof(variable_three))
//this is cosidered as a mistake in js as variable threee is seen to be null but it shows tye as object

variable_four=undefined
console.log(variable_four);
console.log(typeof(variable_four));

//conditional statements
//ecma
demo=10
if(demo>=0){
    console.log(demo + "+ve no.")
}
else{
    console.log(demo + "-ve no.")
}

flag=true
if(flag){
    var a=100
    console.log(`the value of a inside if if-block is ${a} `)

}
else{
    b=200
}
console.log(a)

flag=true
if(flag){
    let a
    var b
    a=100
    b=200
    const c=300;
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(`the value of a inside if if-block is ${a} `)

}
else{
    b=200
}
console.log(a)
//LOOPS
//A. for loop :-

//non prmitive datatypes(Non-PDT's)
// a.) Arrays
//contiguous | []
let numbers=[10,20,30,40,50] 
let arr=[];
console.log(numbers)
console.log(arr)

let  numbers2=[10,20,30,40,50]
let arr1=[];
let arrobj=new Array(10);
console.log(numbers)
console.log(arrobj)

let myArr =[100,200,300,400,500] 
let myArr2 = myArr
myArr2.push(100);
console.log(myArr)
 
let dummyarray=[10,"string",true,null,undefined,[]]
console.log(dummyarray)

//matrix

let twoDarray=[[10,20,30],[40,50,60],[70,80,90]]
console.log(twoDarray) 

document.getElementById('submit8tn').addEventListner('click',() =>{
    console.log('submit button was clicked !')
})

//setTimeout( ()=> {
    //console.log('callback was execcuted')
//},3000)
//console.log('code after setTimeout')
document.getElementById('btn').addEventListner('mouse leave',()=> {
    console.log('cursor extend the element')
})
document.getElementById('btn').addEventListner('mouse enter',()=> {
    console.log('cursor extend the element')
})