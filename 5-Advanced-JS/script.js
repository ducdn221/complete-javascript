// Function Constructor

    // var Person = function(name, yearOfBirth, job){
    //     this.name = name;
    //     this.yearOfBirth = yearOfBirth;
    //     this.job = job;
    //     // this.calcAge = function() {
    //     //     console.log(2016 - this.yearOfBirth);
    //     // }
    // }

    // Person.prototype.calcAge = function() {
    //     console.log(2016 - this.yearOfBirth);
    // }
    // var john = new Person('John',1990,'teacher');

    // john.calcAge();
    // var jane = new Person('Jane',1969,'designer')
    // jane.calcAge();
    // var mark = new Person('Mark',1980,'retired');
    // mark.calcAge();
    // console.log(john);
    // console.log(mark);
    // console.log(jane);
    // console.log(Person.prototype);

//Object.create 
    // var personProto = {
    //     calAge: function() {
    //         console.log(this.yearOfBirth);
    //     }
    // }

    // var john = Object.create(personProto);
    // john.name = 'John';
    // john.yearOfBirth = '1990';
    // john.job = 'teacher';

// -----------Primitives vs Object
    //------------------Primitives

    // var a = 23;
    // var b = a;
    // a = 33;
    // console.log(a);
    // console.log(b);

    // ---------------Object

    // var obj1 = {
    //     city: 'Hanoi'
    // }

    // var obj2 = obj;
    // obj1.city = 'HCM';
    // console.log(obj1);
    // console.log(obj2);

    //----------------Function

    var age = 27;
    var obj = {
        name: 'Jonas',
        city: 'Lisbon'
    };

    function change(a,b) {
        a = 30;
        b.city = 'San fransisco'
    }

    change(age,obj);
    console.log(age);
    console.log(obj)


