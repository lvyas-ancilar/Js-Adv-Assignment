
const obj = {
    name : "lavesh",
    age : 20,
    address : {
        city : "indore",
        ward : 100
    },
    hobbies : ["football" , "cricket" , "fifa"],
    greet(){
       return  console.log("Heello")
    }
}

function deepClone(obj){
    const result  = {};
    Object.keys(obj).forEach((key)=>{
        const  data  = obj[key];
        if(typeof data  === 'object' &&  data !== null){
           result[key] =  deepClone(data) 
        }
        else if (typeof data === 'function'){
            result[key] = data()
        }
        else{
            result[key] = data
        }
    })
    return result ;
}


const ans  = deepClone(obj);
console.log(ans)