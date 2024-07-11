Promise.myAllSettled = function promiseAllSettled(promises) {
    let responses = [];
    return new Promise((resolve, reject) => {
        promises.forEach(async(singlePromise, idx) => {
            try {
                let res = await singlePromise;
                responses.push({
                    status: "fulfilled",
                    value: res,
                });
            } catch(err) {
                responses.push({
                    status: "rejected",
                    reason: err,
                });
            }
            if(idx === promises.length - 1) {
                resolve(responses);
            }
        })
    })
}

Promise.myAllSettled([
    Promise.resolve(1),
    Promise.resolve(3),
    Promise.reject(new Error("2")),
  ]).then((results) => {
    console.log(results)
    // results is an array of:
    // {status: "fulfilled", value: 1}
    // {status: "rejected", reason: Error}
    // {status: "fulfilled", value: 3}
  });