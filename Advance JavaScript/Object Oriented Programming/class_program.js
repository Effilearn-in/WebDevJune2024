// (1) Class --> 
// --> (a) Class is the template or blueprint for creating the objects.
// --> (b) Class is the collection of objects.
// --> (c) Class is the user defined data type.

// (2) Object --> 
// --> (a) Object is the instance or part of the class.
// --> (b) Object is any real world entity which having 3 things 
//        --> (1) Identity 
//        --> (2) State / Variables / Data 
//        --> (3) Behaviour / Task / Work / Function

class Programming{

    constructor(){
        console.log("Constructor execution start...");
        this.id="";
        this.name="";
        this.course="";
        console.log("Constructor execution end...");
    }

    // Setter Functions

    setId(id){
        this.id=id;
    }

    setName(name){
        this.name=name;
    }

    setCourse(course){
        this.course=course;
    }

    // Getter Functions 

    getId(){
       return this.id; 
    }

    getName(){
        return this.name;
    }

    getCourse(){
        return this.course;
    }

}

const p1=new Programming();
p1.id=1;
p1.name="P1";
p1.course="C Programming";
console.log("Id :- "+p1.id+"  Name :- "+p1.name+"  Course :- "+p1.course);

const p2=new Programming();
p2.id=2;
p2.name="P2";
p2.course="C++ Programming";
console.log("Id :- "+p2.id+"  Name :- "+p2.name+"  Course :- "+p2.course);

const p3=new Programming();
p3.setId(3);
p3.setName("P3");
p3.setCourse("Java");
console.log("Id :- "+p3.getId()+"  Name :- "+p3.getName()+"  Course :- "+p3.getCourse());

const p4=new Programming();
p4.setId(4);
p4.setName("P4");
p4.setCourse("JavaScript");
console.log("Id :- "+p4.getId()+"  Name :- "+p4.getName()+"  Course :- "+p4.getCourse());

// Constructor :- 

// It is a special type of function which execute when object is created of the class.