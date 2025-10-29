function filterByType(arr, type) {
    const result = [];
    for (const item of arr) {
        if (typeof item === 'object' && item !== null) {
            result.push(item);
        }
        else {
            if (typeof item === type) {
                result.push(item);
            }
        }
    }
    return result;
}
const mixedArray = [10, 'hello', true, { name: 'Lavesh' }, false, 7, 'world'];
const strings = filterByType(mixedArray, 'string');
console.log(strings);
const objects = filterByType(mixedArray, 'object');
console.log(objects);
export {};
// in this what we are basically doing , jo apan ko type diya hai lets say if string then we need to return 
// only those items which are strings 
