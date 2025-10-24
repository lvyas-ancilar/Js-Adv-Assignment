
const obj = {
    name : "lavesh",
    age : 20,
    address : {
        city : "indore",
        ward : 100
    },
    hobbies : ["football" , "cricket" , "fifa"],
}

function deepClone(obj){
    const result  = {};
    Object.keys(obj).forEach((key)=>{
        const  data  = obj[key];
        if(typeof data  === 'object' &&  data !== null){
           result[key] =  deepClone(data) 
        }
        else{
            result[key] = data
        }
    })
    return result ;
}


const ans  = deepClone(obj);
console.log(ans)