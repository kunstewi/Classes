// Example of async/await

// Simulating a network request with a promise
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data fetched");
      }, 2000);
    });
  }
  
  // Async function to use await
  async function getData() {
    console.log("Fetching data...");
    const data = await fetchData();
    console.log(data);
  }
  
  getData();

  // Problem 1

    // Code

  // Problem 2

    // Code