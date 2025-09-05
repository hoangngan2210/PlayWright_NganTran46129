// const message: string = "Hello TypeScript!";
//  console.log(message);


/*
Exercise 1:
1. Create the Person class
- Define a class Person with the following private properties:
+ name: string
+ age: number
+ city: string
- Add a constructor that validates:
+ Name is not empty
+ Age is positive
- Create the following methods:
+ greet(): string → returns "Hi, I'm John from New York."
+ celebrateBirthday(): void → increments age by 1
+ updateCity(newCity: string): void
+ isAdult(): boolean → true if age >= 18
+ hasSameCity(other: Person): boolean
- Add getters for all properties and a method:
+ toJSON() -> returns object suitable for saving to file
+ static fromJSON(data: any): Person → returns instance of Person
*/


/*
Create the Person class
- Define a class Person with the following private properties
 + name: string
 + age: number
 + city: string
*/
class Person {
    private name: string;
    private age: number;
    private city: string;

    /*
    - Add a constructor that validates:
     + Name is not empty
     + Age is positive
    */
    constructor(name: string, age: number, city: string) {
        if (name == "") {
            console.log("Name is not empty");
        }
        if (age <= 0) {
            console.log("Age is positive");
        }
        this.name = name;
        this.age = age;
        this.city = city;
    }

    /*
    - Create the following methods:
     + greet(): string → returns "Hi, I'm John from New York."
     + celebrateBirthday(): void → increments age by 1
     + updateCity(newCity: string): void
     + isAdult(): boolean → true if age >= 18
     + hasSameCity(other: Person): boolean
    */
    greet(): string {
        let currentName = this.name;
        let currentCity = this.city;
        let greetMessage = "Hi, I'm " + currentName + " from " + currentCity + ".";
        return greetMessage;
    }
    celebrateBirthday(): void {
        console.log(this.name + " is celebrating birthday!");
        this.age += 1;
    }
    updateCity(newCity: string): void {
        console.log("City " + this.city + " is updated to " + newCity);
        this.city = newCity;
    }
    isAdult(): boolean {
        console.log("Is " + this.name + " adult?");
        return this.age >= 18;
    }
    hasSameCity(other: Person): boolean {
        console.log("Do " + this.name + " and " + other.name + " has same city?");
        return this.city === other.city;
    }

    /*
    - Add getters for all properties and a method:
     + toJSON() -> returns object suitable for saving to file
     + static fromJSON(data: any): Person → returns instance of Person
    */
    getName(): string {
        return this.name;
    }
    getAge(): number {
        return this.age;
    }
    getCity(): string {
        return this.city;
    }

    toJSON(): object {
        return {
            name: this.name,
            age: this.age,
            city: this.city
        };
    }
    static fromJSON(data: any): Person {
        return new Person(data.name, data.age, data.city);
    }
}

// Test the Person class:
const invalidPerson = new Person("", -1, "Ha Noi"); // Name is not empty | Age is positive
console.log(invalidPerson.greet()); // "Hi, I'm  from Ha Noi."    
console.log("\n");

const alex = new Person("Alex", 30, "Ha Noi");
console.log(alex.greet()); // "Hi, I'm Alex from Ha Noi."
console.log("Current age: " + alex.getAge()); // Current age: 30
alex.celebrateBirthday(); // Alex is celebrating birthday!
console.log("Current age: " + alex.getAge()); // Current age: 31
console.log("Currnt city: " + alex.getCity()); // Currnt city: Ha Noi
alex.updateCity("Da Nang"); // City Ha Noi is updated to Da Nang
console.log("Currnt city: " + alex.getCity()); // Currnt city: Da Nang
console.log(alex.isAdult()); // Is Alex adult? | true
console.log("\n");

const john = new Person("John", 30, "New York");
console.log(john.greet());  // "Hi, I'm John from New York."        
console.log(john.hasSameCity(alex)); // Do John and Alex has same city? | false
console.log("\n");

console.log(john.toJSON()); // { name: "John", age: 30, city: "New York" }
const johnData = john.toJSON();
const johnInstance = Person.fromJSON(johnData);
console.log(johnInstance.greet());  // "Hi, I'm John from New York."    
console.log(johnInstance.hasSameCity(john)); // Do John and John has same city? | true