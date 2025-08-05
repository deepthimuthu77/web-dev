## Introduction

- alert('Hello World!'); // pop up window
- console.log("Hello world!"); // prints in console
- console.error('This is error') // error shows up in console
- console.warn('This is warning') // warning shows up in console

## VARIABLE INITIALISATION

- var is globally scoped --> causes conflicts
- let is dynamically typed
- const holds a constant value (if no need for reassignment, USE THIS! [more robust and secure])

## DATATYPES

- typeof() can be used to determine the datatype of a variable

- ### Strings

  - const name = 'Deepthi';
  - // Concatenation:

    - console.log('My name is ' + name + ' and I like to code!);

  - // Template String;

    - console.log('My name is ${name} and I like to code!);

  - // Functions and Methods

    - s.length; -> returns length
    - s.toUpperCase(); -> changes to Uppercase
    - s.toLowerCase(); -> changes to Lowercase
    - s.substring(startIndex, endIndex); -> slicing (only lower bound included)

  - // Splitting

    - const s = 'Hello world!';
    - console.log(s.split('')); // splits into every character

    - const tags = 'technology, media, art, craft';
    - console.log(s.split(', ')); // splits into every tag and can be stored in array

- ### Numbers

  - const age = 30;
  - const rating = 9.6;

- ### Boolean

  - let flag = false;

- ### null

  - const x = null;
  - // typeof() returns object --> ERROR!

- ### undefined

  - const y = undefined;
  - let z;

- ### Arrays

  - variables that hold multiple values

  - const nums = new Array(1,2,3,4,5); // using constructor (recog. by 'new')
  - const fruits = ['apples', 'bananas', 'citron', 10, 20];

  - console.log(fruits[1]) // indexing

  - fruits.push('dinner') // appending to array

  - fruits.unshift('breakfast') // adds to the start of the array

  - fruits.pop() // removes the last element

  - console.log(Array.isArray(fruits)) // to check if Array

  - console.log(fruits.indexOf('citron')) // returns index of element (if not -1)

- ### Object Literals

  - key-value pairs

  - const person = {
    firstName: 'Deepthi',
    lastName: 'Muthukumar',
    age: 18,
    hobbies: ['music', 'movies', 'coding', 'gaming'],
    address: {
    street: '405 ABC Street',
    city: 'Chennai',
    state: 'Tamilnadu'
    }
    };

    console.log(person);
    console.log(person.hobbies);
    console.log(person.address.state);

    // dectructuring
    const {firstName, lastName, address: { city }} = person;

    // adding properties
    person.email = 'deepthi123@gmail.com';

  - const todos = [
    {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
    },
    {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
    },
    {
    id: 3,
    text: "Dentist appt.",
    isCompleted: true,
    },

    ];

    console.log(todos[1].text)

  - const todoJSON = JSON.stringify(todos);
    console.log(todoJSON);

- ### Loops

      // for loop
      for(let i=0 ; i<=10 ; i++){
          console.log(`For Loop Number: ${i}`);
      }

      // traversing through obe=ject literals
      for(let i=0 ; i < todos.length ; i++){
          console.log(todos[i].text);
      }

      for(let todo of todos){
          console.log(todo.id);
      }

      // high order array method (forEach, map, filter)
      - forEach
      todos.forEach(function(todo) {
      console.log(todo.text);
      });

      - map ==> returns array
      const todoText = todos.map(function(todo) {
      return todo.text
      });

      console.log(todoText);

      - filter 
      const todoCompleted = todos.map(function(todo) {
      return todo.isCompleted === true;
      });
      console.log(todoCompleted);

      // to chain on with map,
      const todoCompleted = todos.map(function(todo) {
      return todo.isCompleted === true;
      }).map(function(todo){
        return todo.text;
      })
      console.log(todoCompleted);


    // while
    let i = 0;
    while(i>10){
        console.log(`For Loop Number: ${i}`);
        i++;
    }
