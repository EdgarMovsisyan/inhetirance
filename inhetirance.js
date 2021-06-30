class Person {
    constructor(age, gender) {
        this.age = age;
        this.gender = gender;
    }
}


class Student extends Person {
    constructor(firstName, lastName, age, gender) {
        super(age, gender);
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const student1 = new Student("Edgar", "Movsisyan", 27, "male");

console.log(student1);