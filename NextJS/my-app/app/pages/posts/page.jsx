// // "use client"

// import axios from "axios";
// // import { useEffect, useState } from "react";

// export default async function Posts() {
//   // let [posts, setPosts] = useState([])

//   // useEffect(() => {
//   //   let fetchPosts = async () => {

//   //     try {
//         let response = await axios.get('https://dummyjson.com/posts');
//         let posts = response?.data?.posts

//         console.log(response?.data?.posts);
//         setPosts(posts)

//   //     } catch (error) {
//   //       console.error(error)
//   //     }
//   //   }

//   //   fetchPosts()

//   // }, [])

//   return (
//     <div>
//       <h2>
//         All Posts page
//       </h2>

//       <p>
//         total posts: {posts?.length || 0}
//       </p>


//       {
//         posts?.map((post)=>{
//           return (
//             <div>
//               <h2>{post?.title}</h2>
//             </div>
//           )
//         })
//       }

//     </div>
//   );
// }


// // 'server' or 'client'
