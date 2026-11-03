import axios from "axios";


export async function Post({ params }) {

  let { id } = await params;

  let response = await axios.get(`https://dummyjson.com/posts/${id}`);
  console.log(response.data)

  return (
    <div>
       <h2>

        Single Post page
      </h2>

    </div>
  );
}
