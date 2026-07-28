import axios from 'axios'
import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router'

const UserSearch = () => {

    let [serachParams] = useSearchParams()
    let userQuery = serachParams.get('q')
    console.log(userQuery)


    let queryUser = async()=>{
        try {
            let response = await axios.get(`https://dummyjson.com/users/search?q=${userQuery}`);
            console.log(response)


        } catch (error) {
            console.log(error)
        }
    }


    useEffect(()=>{

        queryUser()
    },[])


    return (
        <div>


           

        </div>
    )
}

export default UserSearch