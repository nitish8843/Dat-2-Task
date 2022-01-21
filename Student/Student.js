class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    describe() {
        return this.name + "is" + this.age + "years old";
    }
}
var e1 = new Student("nitish", 23);
console.log(e1.describe());