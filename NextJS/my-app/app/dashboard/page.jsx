"use client"

import axios from "axios";
import { useEffect } from "react";

export default function Dashboard() {

  useEffect(() => {
    (async () => {
      try {

        let response = await axios.get('/api/users/1');
        console.log(response)

      } catch (error) {
        console.error(error)
      }
    })();

  }, [])



  return (
    <div>
      <h2>

        Dashboard page
      </h2>

    </div>
  );
}
