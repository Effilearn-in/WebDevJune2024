// (1) Arithmetic Operator

var n1=10;
var n2=20;

console.log("Addition of n1 and n2 :- "+(n1+n2));
console.log("Subtraction of n1 and n2 :- "+(n1-n2));
console.log("Multiplication of n1 and n2 :- "+(n1*n2));
console.log("Division of n1 and n2 :- "+(n1/n2));
console.log("Modulus of n1 and n2 :- "+(n1%n2));

// Assignment Operator 

n1+=n2;
n1-=n2;
n1*=n2;
n1/=n2;
n1%=n2;

console.log("Value of n1 :- "+n1);
console.log("Value of n2 :- "+n2);

// Comparision / Relational Operator 

console.log("Value of n1<n2 :- "+(n1<n2));
console.log("Value of n1<=n2 :- "+(n1<=n2));
console.log("Value of n1>n2 :- "+(n1>n2));
console.log("Value of n1>=n2 :- "+(n1>=n2));
console.log("Value of n1==n2 :- "+(n1==n2));
console.log("Value of n1!=n2 :- "+(n1!=n2));

// Logical Operator 

console.log("Value of (n1==100) && (n2==200) :- "+((n1==100) && (n2==200)));
console.log("Value of (n1==10) && (n2==200) :- "+((n1==10) && (n2==200)));
console.log("Value of (n1==10) && (n2==20) :- "+((n1==10) && (n2==20)));

console.log("Value of (n1==100) || (n2==200) :- "+((n1==100) || (n2==200)));
console.log("Value of (n1==10) || (n2==200) :- "+((n1==10) || (n2==200)));
console.log("Value of (n1==10) || (n2==20) :- "+((n1==10) || (n2==20)));