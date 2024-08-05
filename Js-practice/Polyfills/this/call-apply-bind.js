// polyfill for bind

Function.prototype.myBind = function(obj={}, ...args) {
    const fn = this;

    if (typeof fn !== "function") {
        throw new Error("Invalid function provided for binding");
    }
    return function(...args2) {
        fn.apply(obj, [...args, ...args2]);
    }
}

