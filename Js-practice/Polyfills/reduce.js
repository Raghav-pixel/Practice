function reduce(callback, initialValue) {
    let accumulator = initialValue === undefined ? this[0] : initialValue;
    let start = initialValue === undefined ? 1 : 0;

    for(let i=start; i<this.length; i++) {
        accumulator = callback(accumulator, this[i], i);
    }

    return accumulator;
}

Array.prototype.myReduce = reduce;

const arr = [1, 2, 3, 4];
const reduceResult = arr.myReduce((acc, curr) => acc + curr, 10);

console.log(reduceResult);