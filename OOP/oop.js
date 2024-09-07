
// Object-Oriented Programming (OOP) is a programming paradigm that uses objects and classes to structure code in a more modular and reusable way. The four main concepts of OOP are:

// Encapsulation
// Inheritance
// Polymorphism
// Abstraction

// Encapsulation

//Encapsulation is the concept of bundling data (variables) and methods (functions) that operate on the data into a single unit, or class. It also involves restricting access to certain properties or methods to prevent external interference or misuse.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    intro() {
        console.log(`My name is ${this.name} and age is ${this.age}`)
    }
}

const person1 = new Person('Raghav', 26);
person1.intro();

//In this example, the #name and #age properties are private and can only be accessed or modified through the public methods getName, setName, getAge, and setAge. This ensures that the data inside the object is protected from direct manipulation.

// Inheritance

//Inheritance is a mechanism where one class (child or subclass) can inherit properties and methods from another class (parent or superclass). This promotes code reusability.

class Student extends Person {
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    } 
    
    subMarks() {
        console.log(`${this.name} of ${this.age} age has ${this.marks} marks`);
    }
}

const student1 = new Student('Raghav', 26, 100);
student1.subMarks();

//Here, the Dog class inherits from the Animal class. The speak method is overridden in the Dog class to provide specific behavior for dogs.

// Polymorphism

//Polymorphism means "many shapes" and allows objects to be treated as instances of their parent class while still behaving differently based on their specific class.

class Animal {
    speak() {
        console.log("The animal makes a sound");
    }
}

class Dog {
    speak() {
        console.log("Dog barks");
    }
}

class Cat {
    speak() {
        console.log("Cat Meows")
    }
}

function makeAnimalSpeak(animal) {
    animal.speak();
}

const cat = new Cat();
const dog = new Dog();

makeAnimalSpeak(dog);
makeAnimalSpeak(cat);

//In this example, the makeAnimalSpeak function can accept any object that is an instance of the Animal class or its subclasses. Even though dog and cat are different objects, they both have a speak method, and the function calls the appropriate version of the method.

// Abstraction

// Abstraction involves hiding complex implementation details and showing only the essential features of an object. This simplifies the interface of the objects.
class Car {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    
    startEngine() {
        console.log("Starting Engine...");
    }
    
    drive() {
        this.startEngine();
        console.log(`Driving the ${this.name} ${this.price}.`)
    }
}

const car = new Car("Toyota", 2000000);
car.drive();

// In this example, the Car class abstracts the details of how the engine starts. The user of the Car class only needs to know how to call the drive method, without worrying about how the engine is started internally.