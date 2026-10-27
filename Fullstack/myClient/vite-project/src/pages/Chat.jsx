import React, { useEffect } from 'react'
import { io } from 'socket.io-client'

const Chat = () => {


    useEffect(() => {
        const socket = io('http://localhost:4000') //// localhost:3000

        socket.on('hello', (arg) => {
            console.log('Connected to server')
            console.log(arg)

        }
        )

        return () => {  ///cleanup function to disconnect the socket when the component unmounts
            socket.disconnect();
        }

    }, [])




    return (
        <div>
            <h2>chat</h2>



        </div>
    )
}

export default Chat