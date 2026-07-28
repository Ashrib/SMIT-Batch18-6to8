import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const User = () => {
    let { id } = useParams();
    let [user, setUser] = useState(null);

    let fetchUser = async () => {
        try {
            let response = await axios.get(`https://dummyjson.com/users/${id}`);
            console.log(response.data);
            setUser(response.data);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchUser()
    }, [])


    return (
        <div>
            {
                (user) ?
                    <div>
                        <div className="card mb-3" style={{maxWidth: "540px"}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={user?.image} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{user?.firstName} {user?.lastName} </h5>
                                        <p className="card-text"><small className="text-body-secondary">Role: {user?.role}</small></p>

                                        <p className='card-text'>email: {user?.email}</p>
                                        <p className='card-text'>university: {user?.university}</p>
                                        <p className='card-text'>address: {user?.address?.address},{user?.address?.city},{user?.address?.country},{user?.address?.state},</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    :
                    <div>no user data</div>
            }



        </div>
    )
}

export default User