//Task-1  function to adda new key and value into an object

/*

let name = {};
function addKeyValObj(obj, key, value){
    obj[key] = value;
    return obj;
}
console.log(addKeyValObj(name, "surname", "Doe"));
*/


/*
let obj = {key1: "value1", key2: "value2"};
Object.assign(obj, {key3: "value3"});


*/
/*
let obj = {key1: "value1", key2: "value2"};
var pair = {key3: "value3"};
var scalar = "value4"
obj = {...obj, ...pair, scalar};

console.log(JSON.stringify(obj))
*/




/*
const person = {
    name: 'Eshgin',
    age: 28,
    gender: 'male'
}

person.height = 80.2;

console.log(person);

*/

/*
let myCar = {
    make: "Ferrari",
    model: "Portofino",
    year: 2018
};

myCar["fuel"] = "Petrol";
document.write(JSON.stringify(myCar));

*/









//Task-2 add and delete new key and value the object a function

/*

let person = {};
function addAndDelateObj(obj){
    if(confirm("Add key value to the object")){ 
        const key = prompt("please enter key name in the object");
        const value = prompt("Please enter key value");
        isNaN(value) ? obj[key] = value : obj[key] = +value;
        return obj;
    }else if(confirm("Delete key value from the object")){
        const key = prompt("Please enter key name in the object");
        delete obj[key];
        return obj;
    }else{
        return obj;
    }
}
console.log(addAndDelateObj(person))

*/

/*

const addData = (array, value) => {
    const key = "Name" + (Object.keys(array[0]).length + 1);
    const obj = array[0];
    obj[key] = value;
    
    return obj
  }
  
  const deleteData = (array, key) => {
      const obj = array[0];
    delete obj[key];
    
    return obj;
  }


*/



//Task 3: Sort object in ascending order by count value

/*
let arr = [{count:5}, {name: "Ali", count: 1}, {count: 3}, {age: 33, count:2}];
arr.sort((a, b) => a.count - b.count);
console.log(arr);
*/



//Task-4 Create a new object from an old object using only object methods


//case/1
/*
const myCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
  }

 const yourCar = {
    make: "BMW",
    model: "F30",
    year: 2018,
  }

  

const returnedTarget = Object.assign(myCar, yourCar);

console.log(myCar);
*/


//case/-2 case Object.create()
/*
const myCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
  }

 
  const returnedTarget = Object.create(myCar);

  returnedTarget.make="BMW"
  returnedTarget.model="F30"
returnedTarget.year=2022

console.log(returnedTarget);
*/



//case3 Object.entries()

/*
const myCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
  }

  const entrObj= Object.entries(myCar)
  console.log(entrObj)
  */



  //case 4 Object.freeze(obj);
/*
  const myCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
  }
  Object.freeze(myCar)

  myCar.make="BMW"
  console.log(myCar)
  */




  //Task-5  Deep clone an object exactly


/*
  const myCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
  }

  const clone = JSON.parse(JSON.stringify(myCar))

  console.log(clone)
  */



//Task 6 write a function that creates a new object each time(Functional constructor)
/*

function Person () {
    this.name = 'John',
    this.age = 23
}

const person = new Person();

person.name="Eshgin"
person.age=28
console.log(person)

const student = new Person();
student.name="Doe"
student.age=20

console.log(student)

*/




//Task-7 Builder pattern

/*
let User = function (firstName, lastName, email) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
}

let UserBuilder = function () {

    let firstName;
    let lastName;
    let email;

    return {
        setFirstName: function (firstName) {
            this.firstName = firstName;
            return this;
        },
        setLastName: function (lastName) {
            this.lastName = lastName;
            return this;
        },
        setEmail: function (email) {
            this.email = email;
            return this;
        },
        info: function () {
            return `${this.firstName} ${this.lastName}, ${this.email}`;
        },
        build: function () {
            return new User(firstName, lastName, email);
        }
    };
};

var user = new UserBuilder().setFirstName('Eshgin').setLastName('Farzali').setEmail('eshqinferzeliyev@gmail.com');
console.log(user.info());


*/
/*
setInterval(() => {
  const date = new Date();
  const options = {
    timeZone: 'Asia/Baku',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  const azerbaijanDate = date.toLocaleDateString('en-US', options);
  console.clear()
  console.log(azerbaijanDate);
}, 1000);
*/

/*
setInterval(() => {
  const date = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  const timeZone = ['UTC','Asia/Baku','Europe/London','America/New_York']
  for(let i=0;i<timeZone.length;i++){
    options.timeZone = timeZone[i]
    const globalDate = date.toLocaleDateString('en-US', options);

    console.log(timeZone[i]+': '+globalDate);
  }
}, 1000);

*/


class person{
  constructor(name, surname, age){

    this.name=name
    this.surname=surname
    this.age=age
    console.log(`My fullname is ${name } ${surname}. I'm ${age} years old`)
  }
}

const eshgin = new person ("Eshgin", "Farzali", 28)