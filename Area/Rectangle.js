    class Rectangle {
        //initialize length and breath
        setDim(length, breadth) {
                this.length = length;
                this.breadth = breadth;
            }
            //create get method
        getArea() {
            return "Area = " + (this.length * this.breadth);

        }
    }
    //taking input from user
    var length = window.prompt("enter your length");
    var breadth = window.prompt("enter your breath")

    //cretae object of rectangle
    const rectangle = new Rectangle();
    rectangle.setDim(length, breadth);
    console.log(rectangle.getArea());