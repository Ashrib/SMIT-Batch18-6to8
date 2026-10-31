// "use client"

import axios from "axios";

export default async function Posts() {
  let response = await axios.get('https://dummyjson.com/posts');
  let posts = response.data.posts
  
  console.log(response.data.posts);

  return (
    <div>
      <h2>
        All Posts page
      </h2>

      <p>
        total posts: {posts?.length || 0}
      </p>

    </div>
  );
}


// 'server' or 'client'
