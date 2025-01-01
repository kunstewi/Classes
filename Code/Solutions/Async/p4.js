// Create a function delayedDouble that takes a number and returns a promise.
// The promise should resolve with double the number after 1 second.
// Chain multiple calls to delayedDouble to double a number three times and log the final result.

// Function that returns a promise to double a number after delay
const delayedDouble = (num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(num * 2);
      }, 1000);
    });
  };
  
  // Chain multiple calls to double the number three times
  const number = 5;
  
  delayedDouble(number)
    .then(result1 => {
      console.log(`First double: ${result1}`);
      return delayedDouble(result1);
    })
    .then(result2 => {
      console.log(`Second double: ${result2}`);
      return delayedDouble(result2);
    })
    .then(result3 => {
      console.log(`Final result: ${result3}`);
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
  
  // You can also use async/await syntax for cleaner code:
  const tripleDouble = async (num) => {
    const first = await delayedDouble(num);
    console.log(`First double: ${first}`);
    
    const second = await delayedDouble(first);
    console.log(`Second double: ${second}`);
    
    const final = await delayedDouble(second);
    console.log(`Final result: ${final}`);
    
    return final;
  };
  
  // Usage with async/await
  tripleDouble(5);