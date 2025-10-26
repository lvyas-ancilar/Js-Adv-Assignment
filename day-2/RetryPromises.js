
const wait  = (timer)=>{
    // this will deplay the async function for a particular period of time 
    return new Promise((resolve , reject) =>{
        setTimeout(resolve , timer)
    })
}

const rettryWithDelay = async(ops , retires = 3 , timer = 1000 , finalErr = "failed")=>{
    try {
        const result  = await ops();
        return result ;
    } catch (error) {
        if(retires <= 0){
            return Promise.reject(finalErr)
        }
        console.log("Retrying")
        await wait(timer)

        return rettryWithDelay(ops , retires-1 , timer , finalErr)
    }
}


let attempt  = 0 ; 
async function fn (){   
    attempt++;
    if(attempt < 3){
        console.log("test fn failed")
        throw new Error ("failed")
    }
    else{
        console.log("test fn succeeded")
        return "success"
    }
}


rettryWithDelay(fn , 5 , 1000 )
.then((result)=> console.log(result))
.catch((err)=> console.log(err))