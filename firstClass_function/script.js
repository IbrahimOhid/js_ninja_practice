function fun(){
    console.log('Hello World');
}
fun();

const funs = function(){
    console.log('Hello Africa');
}
funs()

function outerFun(){
    return function innerFun(){
        console.log('america');
    }
}
outerFun()();

function output(danger){
    console.log(danger());
}
output(function(){
    console.log('danger function');
})


function userName (firstName, LastName){
    if(firstName === 'brahim'){
        return `Hello ${firstName}`
    }return `Hello ${LastName}`
}
console.log(userName('ibrahim', 'ohid'));