import "./styles.css";

console.log("Rafiq");
console.log("Huzaifa Bin Rafiq is My son");
var person = "Rafiq";
var thing = "webdeveloper";

console.log(person + "" + "is" + "" + thing);

var item = ["cow", "dog", "cat", "lump", "sheep"];
console.log(item[3]);
console.log(item.push("snake"));

var huzaifa = {
  fullName: "Huzaifa Bin Rafiq",
  age: 6,
  className: "Nursary Two",
  section: "Room No-102"
};
console.log(huzaifa);

huzaifa.welcomeMsg = function () {
  console.log("Huzaifa is Good Boy");
};
huzaifa.welcomeMsg();
for (item in huzaifa) {
  console.log(item);
}

var objArr = {
  name: ["Karim", "Rahim", "Sajib", "Shafiq", "Anis"],
  age: [20, 28, 30, 34, 29],
  normal: "normal item",
  bloodGroup: ["o+", "ab-", "b+", "a+", "ab-"]
};
console.log(objArr.age[3] + "is" + objArr.name[3]);
var funcName = function () {
  console.log("I am Function oriant");
};
funcName();

function sumMachine(a, b) {
  var sum = a + b;
  return sum;
}
console.log(sumMachine(2, 2));
console.log(sumMachine(4, 4));

function callMyName(name, callback) {
  var myAge = 20;
  callback(myAge);
  console.log("It is interesting? Yes it is Mr." + name);
}
function hello(age) {
  console.log("I am passed through argument and my age is:" + age);
}
callMyName("Jonayed Ahmed", hello);
console.log(this === window);
function helloThis() {
  "use strict";
  console.log(this);
}

var myCustomObj = {
  name: "Rafiqul Islam",
  age: 35,
  job: "Webdevoloper",
  anotherObj: {
    name: "Huzaifa islam",
    msg: function () {
      console.log("My name is:" + this.name);
    }
  }
};
myCustomObj.anotherObj.msg();
var Person = function (name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
};

var karim = new Person("Kinam Hossian", 29, "Businessman");
var jamil = new Person("Jamil Hossian", 30, "Driver");
var malik = new Person("Malik Ahmed", 18, "Student");
var rafiq = new Person("Rafiqul Islam", 35, "Developer");

var Personwithmethod = function (name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.dateOfBirth = function () {
    console.log(this.name + "is born in" + (2018 - this.age));
  };
};

var karimwithmethod = new Personwithmethod("Kinam Hossian", 29, "Businessman");

karimwithmethod.dateOfBirth();

const obj = {
  a: "one",
  b: "two",
  a: "three"
};
console.log(obj);
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);
function sum(a, b) {
  return a + b;
}
console.log(1, "2");

console.log(hello);
hello();

var a = "Md. Rafiqul Islam";
console.log("My name is " + a);
a = "Md Huzaifa Islam";
console.log("My name is: " + a);
let a6 = "Rafiqul Islam";
console.log("My name is " + a6);

function es5var() {
  var a = 5;

  console.log("value: " + a);
}
es5var();
const name6 = "Rafiqul Islam";
const age6 = 35;
const job6 = "Student.";
console.log(
  `My name is ${name6} and I\'m ${age6} Years old! Currently I\'m ${job6}`
);

const dob = [1996, 1986, 2017, 1989];
const currentAge6 = dob.map((oneDob, index) => `${index} : ${2018 - oneDob}`);
console.log(currentAge6);
const rafiqID = ["Md. Rafiqul Islam", 35, "Developer"];
const [name2, age2, profession2] = rafiqID;
console.log(name2);
console.log(age2);
console.log(profession2);

const rafiqObj = {
  nameObj: "Md. Rafiqul Islam",
  ageObj: 35,
  jobObj: "Developer"
};

const { nameObj, ageObj, jobObj } = rafiqObj;
console.log(nameObj);
console.log(ageObj);
console.log(jobObj);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArr1 = arr.map((item) => item * item);
console.log(newArr1);

const newFilterArr1 = arr.filter((item) => item % 4 === 0);
console.log(newFilterArr1);

const newReduceArr = arr.reduce((sum, item) => (sum += item), 0);
console.log(newReduceArr);

//  function proObj(a,b) {
//      return a+b;
//  }
const proObj = (a, b) => a * b;
console.log(proObj(2, 4));
console.log(arr.some((anArr) => anArr === 6));

const objSome = [
  {
    name: "Rafiq",
    age: 21
  },
  {
    name: "Huzaifa",
    age: 8
  },
  {
    name: "Abid",
    age: 13
  }
];
console.log(objSome.some((anObj) => anObj.name === "Abid"));

const object = {
  Bangladesh: "Dhaka",
  India: "New Dilli",
  Napal: "Kathmandu",
  Afganistan: "Kabul",
  Pakistan: "Karachi"
};

for (let key in object) {
  console.log(object[key]);
}
for (let name in objSome) {
  console.log(objSome[name]);
}

const capitas = Object.values(object);
console.log(capitas);

const countries = Object.keys(object);
console.log(countries);

Object.keys(object).map((country) =>
  console.log(`Capital of ${country} is: ${object[country]}`)
);

const person1 = {
  name: "Rafiq",
  age: 35,
  job: "Devepoler"
};

for (let aVal in person1) {
  console.log(`aVal is here: ${aVal}`);
}

const date = Date();

console.log(date);

const age = 21;

/*if (age<18) {
    console.log('you are not adult.');
} else {
    console.log('you are  adult.');
}*/

console.log(age < 18 ? "you are not adult." : "you are  adult.");

var box1 = document.querySelector("#box1");
console.log(box1);

const arr3 = Array.from("abcdefghijk");

console.log(arr3);

var person = "Rafiqul Islam.";

console.log("My name is: " + person);

document.write(`My name is ${person}, I am 35 years old`);

console.log(typeof person);

var a = 8;
var b = 9;

console.log(a < b ? 100 : 200);

var myName2 = "Rafiqul Islam";

if (a < b) {
  console.log("Your are adult");
} else {
  console.log("you are not adult");
}

// switch condition
var weekDay = "Sunday";

switch (weekDay) {
  case "Saturday":
    console.log("Saturday! Today is closed");
    break;
  case "Sunday":
    console.log("Sunday! Today is normal");
    break;
  case "Monday":
    console.log("Monday! Today is normal");
    break;
  case "Tuesday":
    console.log("Tuesday! Today is normal");
    break;
  case "Wednesday":
    console.log("Saturday! Today is normal");
    break;
  case "Thursday":
    console.log("Tuesday! Today is normal");
    break;
  case "Friday":
    console.log("Friday! Today is closed");
    break;

  default:
    console.log("Not a day");
}

for (let i = 0; i < 10; i++) {
  if (i === 6) {
    continue;
  }
  console.log("Go " + i + " step");
}

var arrName3 = ["Rahim", "Karim", "Rafiq", "Jabir", "Abid", "Tanvir"];
console.log(arrName3["length"]);
console.log(arrName3.indexOf("Tanvir"));
console.log(arrName3);
console.log(arrName3[3]);
arrName3[4] = "Shafiq";
console.log(arrName3);

for (let i = 0; i < arrName3.length; i++) {
  console.log("Name: " + arrName3[i]);
}

console.log(arrName3.push("Busir"));
console.log(arrName3.pop("Busir"));
console.log(arrName3.splice(2, 5));

var rahim = {
  name: "Rahim Ahmed",
  age: 28,
  job: "Student",
  address: "Sylhet"
};

console.log(rahim.name);
console.log(rahim.age);
console.log(rahim["name"]);

console.log((rahim.zipCode = 3517));
console.log((rahim.job = "Businessman"));

console.log(
  (rahim.welcomeMsg = function () {
    console.log("Hello World");
  })
);

for (item in rahim) {
  console.log(item);
}

var objArray = {
  name: ["Rafiq", "Taher", "Halim", "Jaber"],
  age: [21, 25, 27, 31],
  job: ["Student", "Worker", " Developer", "Driver"]
};
console.log(objArray.name[2]);
console.log(objArray.age[2]);

console.log(
  `My name is ${objArray.name[0]} and i am ${objArray.age[0]} years old and my job is ${objArray.job[0]}`
);

document.write(
  `My name is ${objArray.name[0]} and i am ${objArray.age[0]} years old and my job is ${objArray.job[0]}`
);

var sumioRf = function () {
  console.log("Hello Taher vai");
};
sumioRf();

function funcName1(a, b) {
  var sum = a + b;
  return sum;
}

console.log(funcName1(8, 6));

function personID(name, age) {
  console.log(`My name is ${name} and i am ${age} years old`);
}

personID("Md Rafiqul Islam", 35);

function anotherFunc() {
  console.log("Global function");
  function localFunc() {
    console.log("Local Function");
  }
  localFunc();
}

anotherFunc();

var locals = {
  name: "Rahim Ahmed",
  age: 36
};
console.log(locals);

var faothing = (function faothing() {
  console.log("khaitumna kisu");
})();

console.log(this);

(function baio() {
  this.name = "md Raihan";
})();

var myCustomerObj = {
  name: "Kamal Hossain",
  age: 32,
  Job: "Developer",
  msg: function () {
    console.log(this);
  }
};

myCustomerObj.msg();

var myCostum = {
  name: "Md Rahim Ahmed",
  age: 31,
  job: "Student",
  anatherOb: {
    name: "Ahmed Shafiq",
    value: function () {
      console.log("My name is " + this.name);
    }
  }
};

myCostum.anatherOb.value.apply(myCostum);

var karimAhmed = {
  name: "Karim Ahmed",
  dob: 1986,
  age: function (currentYear, msg) {
    console.log(
      msg + "" + this.name + " is " + (currentYear - this.dob) + " year old!."
    );
  }
};

var rahimy = {
  name: "Rahim Ahmed",
  dob: 1990
};

karimAhmed.age.apply(rahimy, [2022, "Hello word "]);

var ste = new String("I love Bangladesh");

console.dir(ste);

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}

// function toUpper(string) {
//     return string.toUpperCase();
//   }

const cat = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cat.map((Element) => Element.toUpperCase());

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

//   function lCat(cat) {
//     return cat.startsWith('L');
//   }

const catt = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = catt.filter((cat) => cat.startsWith("L"));

console.log(filtered);
// [ "Leopard", "Lion" ]

const catr = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;

while (i < catr.length) {
  if (i === catr.length - 1) {
    myFavoriteCats += `and ${catr[i]}.`;
  } else {
    myFavoriteCats += `${catr[i]}, `;
  }

  i++;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."

const personn = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  }
};

personn.introduceSelf();

var today = new Date();
var day = today.getDay();
var daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday"
];
console.log("Today is : " + daylist[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

var prepand = hour >= 12 ? " PM " : " AM ";

hour = hour >= 12 ? hour - 12 : hour;
if (hour === 0 && prepand === " PM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Noon";
  } else {
    hour = 12;
    prepand = " PM";
  }
}

if (hour === 0 && prepand === " AM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Midnight";
  } else {
    hour = 12;
    prepand = " AM";
  }
}
console.log(
  "Current Time : " + hour + prepand + " : " + minute + " : " + second
);

const dates = new Date();
const toDay = dates.getDay();
const daylis = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday"
];
console.log(daylis[toDay]);

console.log(dates.getDay());
console.log(dates.getFullYear());
console.log(dates.getHours());

function anoGlobalFunc() {
  console.log("Global Function");
  function localFunc() {
    console.log("Local Function");
  }
  localFunc();
}
anoGlobalFunc();

function parentFunction() {
  var a = 6;
  function childFunction() {
    var b = 4;
    console.log("Sum: " + (a + b));
  }
  childFunction();
}

parentFunction();

var myCustomObj = {
  name: "Zonayed Ahmed",
  age: 21,
  job: "Student",
  msg: function () {
    console.log("My name is " + this.name);
  }
};
myCustomObj.msg();

var myCustomOb = {
  name: "Zonayed Ahmed",
  age: 21,
  job: "Student",
  anotherObj: {
    name: "Ahmed Zonayed",
    value: function () {
      console.log("My name is " + this.name);
    }
  }
};

myCustomOb.anotherObj.value.call(myCustomOb);

function getVar() {
  var x;
  setTimeout(function () {
    x = 12;
  }, 3000);
  return x;
}
var value = getVar();
console.log("The Value is: " + value);

const dobt = [1917, 1978, 2014, 1989, 2020];

const curentAge = dobt.map((oneDob) => 2022 - oneDob);

console.log(curentAge);

const aGes = [32, 15, 36, 14, 42, 48, 30];

function checkAge(age) {
  return age > document.getElementById("ageToCheck").value;
}

function myFunction() {
  document.getElementById("app").innerHTML = aGes.filter(checkAge);
}
