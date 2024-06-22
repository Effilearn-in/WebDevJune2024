// (2) Implement a class hierarchy for different shapes (e.g., Circle, Square) 
// with a common base class. Calculate their areas.

class Shape{
    area(){
        throw new Error("Implemented class must create area function");
    }
}

class Circle extends Shape{

    constructor(radius){
        super();
        this.radius=radius;
    }

    area(){
        return 3.14*this.radius*this.radius;
    }
}

class Square extends Shape{


    constructor(side){
        super();
        this.side=side;
    }

    area(){
       return this.side*this.side; 
    }
}

const circle=new Circle(5);
console.log("Circle area :- "+circle.area());

const square=new Square(5);
console.log("Square area :- "+square.area());

