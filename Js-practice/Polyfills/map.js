function map(callback) {
    let result = [];
    for(let i=0; i<this.length; i++) {
        result.push(callback(this[i], i));
    }
    return result;
}

Array.prototype.myMap = map;

const arr = [1, 2, 3, 4];
const mapResult = arr.myMap((ar, idx) => ar*2);
console.log(mapResult);