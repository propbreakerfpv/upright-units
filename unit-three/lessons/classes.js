
class Pizza {
    constructor(diameter, type){
        this.diameter = diameter;
        this.type = type;
        console.log("hello pizza")
    }
}


let pizza = new Pizza(32, "good");

console.log(pizza);



class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    aria(){
        return this.height * this.width;
    }
    isSquare(){
        return this.height === this.width ? true : false;
    }
}

let rectangle1 = new Rectangle(10, 5);

console.log(rectangle1.aria());
console.log(rectangle1.isSquare())


