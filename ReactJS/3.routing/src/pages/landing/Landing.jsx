import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import axios from 'axios'
import { Link } from 'react-router'

const Landing = () => {
  let [users, setUser] = useState([])



  useEffect(() => {


    (
      async () => {
        try {
          let response = await axios.get('https://dummyjson.com/users');
          setUser([...response.data.users])
          console.log(response);
        } catch (error) {
          console.error(error)
        }
      }
    )() /// immediate invoke

  }, [])

  return (
    <>
      <Navbar />
      <div>
        <h2>Landing page</h2>


        <div style={{
          display:"grid", gridTemplateColumns:'1fr 1fr 1fr 1fr', gap:'8px'
        }}>
          {
            (users?.length > 0) ?

              users?.map((user) => {
                return <>
                
                {/* <Link to={`/user/${user?.id}`}> */}
                  <div
                    style={{
                      border: '1px solid black', padding: '15px', cursor: "pointer"
                    }}
                  >
                    <img src={user?.image} />
                    <h2>{user?.firstName} {user?.lastName}</h2>

                  </div>
                {/* </Link> */}
                </>
              })
              :
              <h2>no data...</h2>
          }
        </div>
      </div>
    </>
  )
}

export default Landing