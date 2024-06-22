       
// Inheritence  --> 
// --> It is a feature in which child class acquire the properties of parent class.

// (1) Single Inheritence 
// (2) Multilevel Inheritence 
// (3) Hierarchical Inheritence 

class A{
    display(){
        console.log("Class A");
    }
}

class B extends A{
    display(){
        console.log("Class B");
    }
}

const a=new A();
a.display();

const b=new B();
b.display();