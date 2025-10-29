function compose<T>(...funcs: Array<(x: T) => T>) { // function ka generic type t hai , uske baad 
    // rest operator ki madad se we are taking those args and putting them in array [f1, f2,f3]
  return function (value: T): T {  // value lega of type t and will return of type t 
    let result = value;
    for (let j = funcs.length - 1; j >= 0; j--) { // backward loop because compose function right to left 
      let currentFunc = funcs[j];
      if(currentFunc){
      result = currentFunc(result);
      }
    }
    return result;
  };
}

function f1(x: number): number {
  return x + 1;
}

function f2(x: number): number {
  return x * 2;
}

function f3(x: number): number {
  return x - 3;
}

const composed = compose(f1, f2, f3);
console.log(composed(10));
