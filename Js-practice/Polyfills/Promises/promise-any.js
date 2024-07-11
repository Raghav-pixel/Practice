Promise.myAny = function promiseAny(promises) {
    let errResp = [];
    return new Promise((resolve, reject) => {
        promises.forEach(async(singlePromise, idx) => {
            try {
                let res = await singlePromise;
                if(res) resolve(res);
                if(idx === promises.length - 1) {
                    if(errResp.length > 0) {
                        reject(err);
                    }
                }
            } catch(err) {
                
            }
        })
    })
}

const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise2, promise1, promise3];

Promise.any(promises).then((value) => console.log(value)).catch((err) => console.log(err));
