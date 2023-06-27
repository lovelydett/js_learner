// Inheritance implemented by prototype.
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        let object_type = typeof (this);
        console.log(`${this.name} of class ${object_type} barks.`);
    }
}

class Cat extends Animal {
    speak() {
        let object_type = typeof (this);
        console.log(`${this.name} of class ${object_type} meows.`);
    }
}

// main function
function main() {
    let dog = new Dog('Rex');
    let cat = new Cat('Tom');
    dog.speak();
    cat.speak();
}

// calling main
main();