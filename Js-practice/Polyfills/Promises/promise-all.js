Promise.myAll = function promise(promises) {
    let errResp = [];
    let responses = [];

    return new Promise((resolve, reject) => {
        promises.forEach(async(singlePromise, idx) => {
            try {
                let res = await singlePromise;
                responses.push(res);
                if(idx === promises.length - 1) {
                    if(errResp.length>0) {
                        reject(errResp);
                    } else {
                        resolve(responses);
                    }
                }
            } catch(err) {
                errResp.push(err);
                reject(err);
            }
        })
    })
}

let promise1 = Promise.resolve("promise-1");
let promise2 = Promise.resolve("promise-2");
let promise3 = Promise.resolve("promise-3");

Promise.myAll([
    promise1, promise2, promise3
])
.then((responses) => {
    console.log(responses);
})
.catch((err) => {
    console.log(err);
});