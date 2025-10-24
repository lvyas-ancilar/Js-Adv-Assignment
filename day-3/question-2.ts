function filterByType<T>(arr: unknown[], type: 'string' | 'number' | 'boolean' | 'object'): T[] {
  const result: T[] = [];

  for (const item of arr) {
    if (type === 'object') {
      if (typeof item === 'object' && item !== null) {
        result.push(item as T);
      }
    } else {
      if (typeof item === type) {
        result.push(item as T);
      }
    }
  }

  return result;
}

const mixedArray = [10, 'hello', true, { name: 'Lavesh' }, false, 7, 'world'];

const strings = filterByType<string>(mixedArray, 'string');
console.log(strings); 

const objects = filterByType<object>(mixedArray, 'object');
console.log(objects); 



// in this what we are basically doing , jo apan ko type diya hai lets say if string then we need to return 
// only those items which are strings 