import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { Link, useNavigate } from 'react-router'

const Users = () => {
    let [users, setUser] = useState([])
    let [userSearch, setUserSearch] = useState(null)
    let navigate = useNavigate();



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
        <div>
            <Navbar />



            <div style={{
                margin:'20px',
                display:"flex", justifyContent:"center"
            }}>
                <input type="text" placeholder='enter for user search' 
                onChange={ (e)=> setUserSearch(e.target.value)}
                
                />
                <button
                onClick={()=>{
                    if(userSearch){
                        navigate(`/user-search?q=${userSearch}`);
                    }
                }}
                
                >search</button>
            </div>

            <div style={{
                display: "grid", gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '8px'
            }}>
                {
                    (users?.length > 0) ?

                        users?.map((user) => {
                            return <>

                                <Link to={`/users/${user?.id}`}>
                                    <div
                                        style={{
                                            border: '1px solid black', padding: '15px', cursor: "pointer"
                                        }}
                                    >
                                        <img src={user?.image} />
                                        <h2>{user?.firstName} {user?.lastName}</h2>

                                    </div>
                                </Link>
                            </>
                        })
                        :
                        <h2>no data...</h2>
                }
            </div>


        </div>
    )
}

export default Users