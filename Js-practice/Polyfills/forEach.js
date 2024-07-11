function forEach(callback) {
    for(let i=0; i<this.length; i++) {
        callback(this[i], i);
    }
}

Array.prototype.myForEach = forEach;

const arr = [1, 2, 3, 4];
arr.forEach((ar) => {
    console.log(ar);
});