function hello(){
    console.log("hello")
}


function mysetInterval(callback , delay){
    // fn - >fn - > fn. but with delay 
    let timerId ;
    function repeat(){
        callback()
       timerId =  setTimeout(repeat , 1000)
    }


    timerId = setTimeout(repeat , 1000)

    function clear(){
        clearTimeout(timerId)
    }

    return clear;
}



mysetInterval(hello , 1000)