const xhr = new XMLHttpRequest();
const url = `https://api.github.com/users`
console.log(`First readyState -> ${xhr.readyState}`)
// Step2 - Open the portal of communication b/w client & server
xhr.open('GET', url)
console.log(`Second readyState -> ${xhr.readyState}`)
// readyState = 1
// StepX - Set your request headers -> setRequestHeaders
// Step3 - Perform an action over request state change
//static mtlb object ke bina acess kr skte hain
//primitivee datatypes
// byte , short , int , long , char , double , float , boolean