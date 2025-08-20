////////////////////Variable c]scope check//////////////
/* console.log('Practice Js From Vs code');
//Declare varible from out side
var a;
console.log(a);
var a = 10;
console.log(a);
//console.log(b); Reference error cannot access b before intilization
let b = 20;
console.log(b);
const c = 50;
console.log(c);
//c= 60; Type error assignment to constant variable*/
/////////////////////////////////////////////////////////////////////// Writing inside function/////////////
function processInput(input){
    console.log(`Hi ${input}`);
}
//processInput('Siva kumar');

const testMethod = ()=> console.log('Test Method');
const testMethod2 = (input1,input2) =>{
    console.log(`${input1},${input2}`);
}
//testMethod();
//testMethod2('Hi',2);
///Object creation/////////////////
function objectCreation(){
    const person = {
        name : 'Siva Kumar',
        'reg Id': 100,
        age :22
    }
    console.log(`Name ${person.name}`);
    console.log(`Registration ${person['reg Id']}`);
    console.log(`Age ${person.age}`);
}
//objectCreation();
const order = {
    orderId: 'A123',
    customer: {
        name: 'Siva',
        address: {
            city: 'Guntur',
            pin: 522002
        }
    },
    items: [
        { name: 'Laptop', price: 50000 },
        { name: 'Mouse', price: 500 }
    ]
};
const vehicle = {
    'vehicle type': 'Bike',
    model: 'Pulsar',
    owner: {
        name: 'Siva',
        'reg number': 'AP07CD1234'
    }
};

let key1 = 'vehicle type';
let key2 = 'reg number';

console.log(vehicle[key1]);    
console.log(vehicle.owner[key2]);             
const products = [
    { name: 'Phone', price: 12000 },
    { name: 'Mouse', price: 800 },
    { name: 'Monitor', price: 7000 },
    { name: 'Keyboard', price: 1500 }
];

// Task 1: Use map to create a new array with product names in uppercase
const newProducts = products.map(product => product.name.toUpperCase());
console.log(newProducts);
// Task 2: Use filter to get only products with price > 1000
const premiumProducts = products.filter(product => product.price > 1000);
console.log(premiumProducts);

const marks = [80, 76, 92, 88, 95];
const totalMarks = marks.reduce((total, mark) =>{
    return total+mark;
},0);
console.log('Marks :'+marks);
console.log(totalMarks);
console.log(totalMarks/marks.length);
//sort and find
const users = [
    { name: 'Siva', age: 28 },
    { name: 'Ravi', age: 25 },
    { name: 'Priya', age: 30 },
    { name: 'Aman', age: 24 }
];

const sortUsers = users.sort((user1, user2) => {return user1.age - user2.age});
console.log(sortUsers);
const findUser = users.find(user => user.name === 'Priya');
console.log(findUser);
//Includes, some, every
const users2 = [
    { name: 'Siva', verified: true },
    { name: 'Ravi', verified: true },
    { name: 'Priya', verified: false }
];

const arrayNames = users2.map(user => user.name);
console.log(arrayNames);
const isInclude = arrayNames.includes('Siva');
console.log(isInclude);
const someUser = users2.some( user => user.name === 'Priya');
console.log(someUser);
const everyUser = users2.every(user => user.verified === true);
console.log(everyUser);
////Rest or Spread Operator (...)
//1. Rest operator used in function parameters
function showNames(...names){
    console.log(names);
}
showNames('Siva', 'Priya', 'Ravi');
//2.spread operator used in array
const names = ['Siva', 'Priya', 'Ravi'];
const newNames = [...names, '4', '5'];
console.log(newNames);
//3.Copying/Extending Objects:
const user3 = {
    name: 'Siva',
    age: 28
};
const user4 = {...user3, city: 'Guntur'};
console.log(user4);
console.log(user3);

const baseUser = { name: 'Siva', age: 28 };
const fullUser = { ...baseUser, role: 'Developer', age: 29 };
console.log(fullUser);
//Destructuring lets you extract values from arrays or objects and store them in variables in a cleaner, shorter way.
const user5 = {
    name: 'Siva',
    age: 28,
    city: 'Guntur'
};

const { name, age, city } = user5;

console.log(name); // Siva
console.log(city); // Guntur
//array destructing
const colors = ['red', 'blue', 'green'];
const [first, second, third] = colors;
console.log(first); // red
console.log(third); // green
//Destructuring in Function Parameters
const showUser = ({ name, age }) => {
    console.log(`${name} is ${age} years old`);
};

const person = { name: 'Siva', age: 28 };
showUser(person); // Siva is 28 years old

const product = {
    name: 'Monitor',
    price: 7500,
    brand: 'Dell'
};

// Destructure name and price
const{name:name1, price, brand} = product;
console.log(name1);
console.log(price);
const students = [
    { name: 'Siva', marks: 85 },
    { name: 'Ravi', marks: 42 },
    { name: 'Priya', marks: 91 },
    { name: 'Aman', marks: 60 }
];

const meritStudents = students.filter(({marks}) => marks > 50);
console.log(meritStudents);
const names3 = students.map(({ name }) => name);
console.log(names3);
const totalma = students.reduce((total, { marks }) => total + marks, 0);
console.log(totalma);
const passedNames = students
    .filter(({ marks }) => marks > 50)
    .map(({ name }) => name);

console.log(passedNames); // ['Siva', 'Priya', 'Aman']
///////////////////////
/* 1.this refers to the class instance
2.If you use a callback (like inside forEach, setTimeout, or an event handler), 
   this might not refer to the class anymore.
   showLater() {
    setTimeout(function () {
        console.log(this.message); // ❌ "this" is undefined or points to window
    }, 1000);
}
    Arrow functions don't create their own this — they use the surrounding scope. solution for above
    showLater(){
     setTimeout(() => {
         console.log('Hi' + this.message);
        },1000)
    }
If you ever pass this method as a callback, use arrow function to bind this correctly.
handleClick(event) {
    const { value } = event.target;
    this.message = `You clicked: ${value}`;
}
*/
class MyPractice {
    name = 'Sivakumar';

    normalFunction() {
        setTimeout(function () {
            console.log('From normal:', this.name);
        }, 1000);
    }

    arrowFunction() {
        setTimeout(() => {
            console.log('From arrow:', this.name);
        }, 1000);
    }
}
const obj = new MyPractice();
obj.normalFunction(); // What happens?
obj.arrowFunction();  // What happens?
class Book {
    title = 'Learn JavaScript';

    printTitleLater() {
        setTimeout( () => {
            console.log(this.title);
        }, 500);
    }
}

const b = new Book();
b.printTitleLater(); // ❌ Try fixing this with an arrow function
//Another example for Destructuring
const fakeEvent = {
    type: 'click',
    target: {
        value: 'Hello'
    },
    preventDefault() {
        console.log('Prevented!');
    }
};
function handleClick({ target, type, preventDefault }) {
    console.log(target.value); // Hello
    console.log(type); // click
    preventDefault();;
}
handleClick(fakeEvent);
/////terinary used in  different places
class TerinaryTest{
     score = 150;
     get status(){
        return this.score > 100 ? 'Passed' : 'Failed';
     }
     set status (value){
        this.score = value;
     }
}
const t= new TerinaryTest();
 t.status = 99;
 const status = t.status;
console.log(status);
//Importing propertied and function from other file
import greet, {PI, add, square, multiply, isEven} from './mathUtils.js';
console.log(PI);
console.log(add(2,3));
console.log(square(4));
console.log(multiply(2,5));
console.log(isEven(9));
//Default value for function)
console.log(greet('Sivakumar'));
///////////////////////////
class Motor{
   constructor(brand, speed){
       this.speed = speed;
       this.brand = brand;
   }
    showInfo(){
       console.log(this.speed);
       console.log(this.brand);
   }
}

class Bike extends Motor{
    constructor(brand, speed){
        super(brand, speed);

    }
}
const veh = new Bike('Bajaj', 120);
veh.showInfo();
/*
Why do we need asynchronous code?
 JavaScript is single-threaded, meaning it executes code line by line.
 But sometimes, tasks like fetching data from a server take time — you don’t want your whole app to 
 freeze while waiting!

 1. Promises
 A Promise is an object representing the eventual completion or failure of an asynchronous operation.
 Promise having 3 states:
 pending
 fulfilled
 rejected
 let promise = new Promise(function(resolve, reject) {
  // async task
  if(success) {
    resolve(result);  // operation succeeded
  } else {
    reject(error);    // operation failed
  }
  });*/
  let promise = new Promise((resolve,reject) =>{
      setTimeout(() => {
        let success = true;
        if(success){
            resolve("Task Completed!");
        }else{
             reject("Task Failed!");

        }
      }, 2000);
  })
promise.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);})
/*
past we use call back function to write asynchronous code, so while handling to many callbacks, 
we need to write code in a nested fashion. it cause call back hell issue
 for avoiding this we use promise
What is a Callback?
A callback is simply a function you pass as an argument to another function — 
the callback will be called later when an operation completes.
*/
function asynTask(callback){
    setTimeout(() => {
        callback('second work run in separate thred!');
    }, 2000);
}
console.log('Asyn start');
asynTask((result) => {
    console.log(result);
});
console.log('Asyn end');
/*call back hell issue example*/
let task1 = ((error,callback) =>{
    if(error){
        console.log('Task1 Error');
    }else{
        task2(error,callback);
                console.log('Task1 method completed');
    }

});

let task2 = ((error, callback) =>{

    if(error){
        console.log('Task2 Error');
    }else{
        task3(error,callback);
                console.log('Task2 method completed');

    }

});

let task3 = ((error, callback) =>{
    if(error){
        console.log('Task3 Error');
    }else{
        task4(error,callback);
        console.log('Task3 method completed');

    }

})
let task4 = ((error, callback) =>{
    if(error){
        console.log('Task4 Error');
    }else{
        callback();
        console.log('Task 4 method completed');

    }

})

task1(false, function(){
    console.log('I am the priority message');

})
//create call back view
function getUser(callback) {
  setTimeout(() => {
    console.log("Fetched User");
    callback(null, { id: 1, name: "Siva" });
  }, 1000);
}

function getOrders(user, callback) {
  setTimeout(() => {
    console.log("Fetched Orders for", user.name);
    callback(null, ["order1", "order2"]);
  }, 1000);
}

function sendEmail(orders, callback) {
  setTimeout(() => {
    console.log("Email sent for orders:", orders);
    callback(null, "Email Success");
  }, 1000);
}

//call back hell issue
getUser(function (err, user) {
  if (err) return console.error(err);
  getOrders(user, function (err, orders) {
    if (err) return console.error(err);
    sendEmail(orders, function (err, status) {
      if (err) return console.error(err);
      console.log("Final Status:", status);
    });
  });
});
//promise overcome
function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched User");
      resolve({ id: 1, name: "Siva" });
    }, 1000);
  });
}

function getOrders(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched Orders for", user.name);
      resolve(["order1", "order2"]);
    }, 1000);
  });
}

function sendEmail(orders) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Email sent for orders:", orders);
      resolve("Email Success");
    }, 1000);
  });
}

// PROMISE CHAINING
getUser()
  .then(user => getOrders(user))
  .then(orders => sendEmail(orders))
  .then(status => console.log("Final Status:", status))
  .catch(err => console.error("Error:", err));
//using async and await
async function executeAll() {
  try {
    const user = await getUser();
    const orders = await getOrders(user);
    const status = await sendEmail(orders);
    console.log("Final Status:", status);
  } catch (err) {
    console.error("Error:", err);
  }
}

executeAll();
