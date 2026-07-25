import React from 'react'
import { useParams } from 'react-router'

const User = () => {

    let params = useParams()
    console.log(params)

    return (
        <div>User with id</div>
    )
}

export default User