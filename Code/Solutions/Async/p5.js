// Problem 5: Write an async function that fetches user data from a mock API endpoint (you can use https://jsonplaceholder.typicode.com/users/1).
// Log the user data to the console.

// Function to fetch user data from JSONPlaceholder API
const fetchUserData = async (userId) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const userData = await response.json();
      console.log('User Data:', userData);
      
      // Log specific user details
      console.log('\nUser Details:');
      console.log('Name:', userData.name);
      console.log('Email:', userData.email);
      console.log('Company:', userData.company.name);
      console.log('City:', userData.address.city);
      
      return userData;
    } catch (error) {
      console.error('Error fetching user data:', error.message);
      throw error;
    }
  };
  
  // Usage
  const getUserInfo = async () => {
    try {
      const user = await fetchUserData(1);
      // You can do additional processing with the user data here
    } catch (error) {
      // Handle any errors that occurred during the fetch
      console.error('Failed to get user information:', error);
    }
  };
  
  // Call the function
  getUserInfo();