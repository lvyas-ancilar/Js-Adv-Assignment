

Promise.allSettled = function(promises){
    return new Promise((resolve , reject )=>{
        const result = [];
        let completion = 0;

        promises.forEach((promise , index)=>{
            promise.then((data)=>{
                result[index] = {status : "fulfilled" , value : data};
                completion++;

                if(completion === promises.length){
                    return resolve(result);
                }
            })
            .catch((err)=>{
                result[index] = {status : "failed" , reason : err};
                completion++;

                if(completion === promises.length){
                    return resolve(result);
                }
            })
        })
    })
}


const p1 = Promise.resolve("Promise 1 resolved");
const p2 = Promise.reject("Promise 2 rejected");
const p3 = new Promise((res) => setTimeout(() => res("Promise 3 done after delay"), 1000));

Promise.allSettled([p1, p2, p3])
    .then(results => console.log("All settled results:", results));