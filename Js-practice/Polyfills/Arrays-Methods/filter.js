function filter(callback) {
    let result = [];
    for(let i=0; i<this.length; i++) {
        if(callback(this[i], i)) {
            result.push(this[i]);
        }
    }
    return result;
}

Array.prototype.myFilter = filter;

const arr = [1, 2, 3, 4];
const filterResult = arr.myFilter((ar, idx) => ar>2);

console.log(filterResult);