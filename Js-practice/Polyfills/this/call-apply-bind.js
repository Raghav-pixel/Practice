// polyfill for bind

Function.prototype.myBind = function(obj={}, ...args) {
    const fn = this;

    if (typeof fn !== "function") {
        throw new Error("cannot be bound as it is not callable");
    }
    return function(...args2) {
        fn.apply(obj, [...args, ...args2]);
    }
}

// const obj = {
//     x: 42,
//     getX: function() {
//         return this.x;
//     }
// }

// const unboundGetX = obj.getX;
// console.log(unboundGetX);
// const boundedGetX = unboundGetX.bind(obj);
// console.log(boundedGetX())

// polyfill for call

Function.prototype.myCall = function(context={}, ...args) {
    if(typeof this !== "function") {
        throw new Error("Invalid function provided for call");
    }

    context.fn = this;
    context.fn(...args);
}

// polyfill for apply

Function.prototype.myApply = function(context={}, args=[]) {
    if(typeof this !== "function") {
        throw new Error("Inavlid function provided for apply");
    }
    if(!Array.isArray(args)) {
        throw new Error("CreateListFromArrayLike is called on non-object");
    }

    context.fn = this;
    context.fn(...args);
}

// example

let car1 = {
    color: "Red",
    company: "Ferrari"
};

function purchaseCar(currency, price) {
    console.log(`I have purchased ${this.color} - ${this.company} car for ${currency}${price}`);
}

purchaseCar.call(car1, "$", 5000000);