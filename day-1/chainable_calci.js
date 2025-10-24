function cal( initialValue ){
 
    var accumulator = initialValue;
    var calObj = {
        add,
        sub,
        mul,
        val
    }


    function add(num){
        accumulator =accumulator +  num;
        return calObj;
    }

    function sub(num){
        accumulator =accumulator -  num;
        return calObj;
    }

    function mul(num){
        accumulator = accumulator * num
        return calObj
    }

    function val(){
        return accumulator;
    }

    return calObj;
 }



 var result = cal(2)
 .add(5)
 .sub(4)
 .mul(2)
 .val()



console.log("Result is : " , result)