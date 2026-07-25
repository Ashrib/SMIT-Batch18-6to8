import React from 'react'
import { Link, Outlet } from 'react-router'
import Navbar from '../../components/Navbar'

const Auth = () => {
    return (
        <div>
            {/* <Navbar/> */}

            <h2>Authentication -- parent route</h2>

            <div 
            style={{
                padding:'10px',marginBottom:"20px",
                borderBottom:'2px solid black'

            }}
            >
                <Link to={'/auth/login'}>
                    <button>login</button>
                </Link>

                <Link to={'/auth/register'}>
                    <button>register</button>
                </Link>
            </div>

            <Outlet/>

            <div>
                <h2>footer</h2>
                <div>
                    <span>link</span>
                    <span>link</span>
                    <span>link</span>
                    <span>link</span>
                </div>
            </div>

        </div>
    )
}

export default Auth