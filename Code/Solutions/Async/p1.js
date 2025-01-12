// Write a function processArray that takes an array and a callback function. The function should iterate over the array and apply the callback to each element.

function processArray(array, callback){
    let result = [];
    for(let i = 0; i < array.length; i++){
      result.push(callback(array[i]));
    }
    return result;
  }
  
  const arr = [1,2,3,4];
  const doubled = processArray(arr, (x) => x * 2);
  console.log(doubled); // [2, 4, 6, 8]