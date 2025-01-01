// Write an async function that makes two sequential API calls.
// First, fetch a post from https://jsonplaceholder.typicode.com/posts/1, then fetch the comments for that post from https://jsonplaceholder.typicode.com/posts/1/comments.
// Log both the post and its comments to the console.

const fetchPostAndComments = async (postId) => {
    try {
      // First API call - fetch the post
      const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      if (!postResponse.ok) {
        throw new Error(`Failed to fetch post. Status: ${postResponse.status}`);
      }
      const post = await postResponse.json();
      
      // Second API call - fetch the comments
      const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      if (!commentsResponse.ok) {
        throw new Error(`Failed to fetch comments. Status: ${commentsResponse.status}`);
      }
      const comments = await commentsResponse.json();
      
      // Log the post
      console.log('\nPost:');
      console.log('Title:', post.title);
      console.log('Body:', post.body);
      
      // Log the comments
      console.log('\nComments:', comments.length, 'total');
      comments.forEach((comment, index) => {
        console.log(`\nComment ${index + 1}:`);
        console.log('Name:', comment.name);
        console.log('Email:', comment.email);
        console.log('Comment:', comment.body);
      });
      
      return { post, comments };
    } catch (error) {
      console.error('Error fetching data:', error.message);
      throw error;
    }
  };
  
  // Usage
  const getPostWithComments = async () => {
    try {
      const result = await fetchPostAndComments(1);
      // You can do additional processing with the data here
      return result;
    } catch (error) {
      console.error('Failed to get post and comments:', error);
    }
  };
  
  // Call the function
  getPostWithComments()