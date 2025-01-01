// Write a function fetchData that returns a promise.
// The promise should resolve with the string "Data fetched" after 2 seconds.
// Use the .then method to log the resolved value.


function fetchData(){
   return new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve ("Data Fetched");
    }, 2000);
   });
}

fetchData().then((result) => {
    console.log(result);
});