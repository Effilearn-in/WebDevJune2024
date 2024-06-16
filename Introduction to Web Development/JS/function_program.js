function hello(){
    console.log("Hello");
}

function add(a,b){
    console.log("Addition of a and b :- "+(a+b));
}

function data(){
    return 5;
}

function sum(a,b,c){
    return a+b+c;
}

hello();

add(4,5);

var a=data();
console.log("Value of a :- "+a);

var result=sum(4,5,6);
console.log("Result :- "+result);