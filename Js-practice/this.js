// value of this in different contexts

// 1. Global Context
// In the global context(outside of any function), 'this' refers to the global object. In a browser
// this is the window object

console.log(this) // window object

// 2. Function Context(Non-strict mode)
// When a function is called in the global context, this refers to the global object.

function globalFunction() {
    console.log(this) // window object
}

globalFunction();

// 3. Function Context(Strict mode)
// In the strict mode, "this" is "undefined", if the function is called in the global context

// "use strict"
// function globalFunction() {
//     console.log(this) // window object
// }

// globalFunction();

// 4. Method Context
// When a function is called as a property of an object, 
// 'this' refers to the object that owns the method

// const obj = {
//     value: 42,
//     method: function() {
//         console.log(this);
//     }
// }
// obj.method();

// 5. Constructor Context
// When a function is used as a constructor(with the 'new' keyword)
// 'this' refers to the newly created instance

function MyClass(value) {
    this.value = value;
}

const instance = new MyClass(42);
console.log(instance.value); // 42


// 6. Arrow Functions
// Arrow functions do not have their own this. Instead, 
// this is lexically inherited from the surrounding scope at the time the arrow function is defined.

const obj = {
    value: 42,
    method: function() {
      const arrowFunc = () => {
        console.log(this.value); // 42
      };
      arrowFunc();
    }
};
  
obj.method();
  

// 7. call, apply and bind
// call and apply immediately invoke the function with a specified this value.
// bind returns a new function with a specified this value.

function showValue() {
    console.log(this.value);
}
  
const obj1 = { value: 1 };
const obj2 = { value: 2 };

showValue.call(obj1); // 1
showValue.apply(obj2); // 2

const boundFunction = showValue.bind(obj1);
boundFunction(); // 1


// 8. Event Handlers
// In event handlers, this typically refers to the element that received the event.

document.getElementById('myButton').addEventListener('click', function() {
    console.log(this); // The button element
});
  
// However, if you use an arrow function as an event handler, 
//this will not refer to the element but to the surrounding scope.

document.getElementById('myButton').addEventListener('click', () => {
    console.log(this); // The surrounding scope, likely the window object
});
  