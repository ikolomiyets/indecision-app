class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreetings() {
        return `Hi! From ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.m}`
        }
        return description;
    }
}

const me = new Student('Igor Kolomiyets', 48, 'Engineering');
console.log(me);
console.log(me.getGreetings());
console.log(me.getDescription());

const other = new Student();
console.log(other);
console.log(other.getGreetings());
console.log(other.getDescription());

