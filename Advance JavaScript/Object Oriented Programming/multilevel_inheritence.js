class A{
    display(){
        console.log("display 1 function");
        console.log("Class A");
    }

    display(a,b){
        console.log("display 2 function");
    }

    display(a,b,c){
        console.log("display 3 function");
    }
}

class B extends A{
    display(){
        console.log("Class B");
    }
}

class C extends B{
    display(){
        console.log("Class C");
    }
}

const a=new A();
a.display(2,3,4);

const b=new B();
b.display();

const c=new C();
c.display();