import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { counterIncre, incrWithAmount, resetCounter } from '../redux/slices/counterSlice'

const Home = () => {

    let theme = useSelector((state) => state.theme.value)
    const dispatch = useDispatch()


    return (
        <div>
            <Navbar />

            <h3>home page</h3>

            <div>
                theme value: {theme}

            </div>

            <button
                onClick={() => dispatch(counterIncre())}
            >++</button>
            <br />
            <button
                onClick={() => dispatch(resetCounter())}
            >reset</button>

            <br />
            <button
                onClick={() => dispatch(incrWithAmount(10))}
            >+10</button>


            <br />
            <button
                onClick={() => dispatch(incrWithAmount(100))}
            >+100</button>

            <br />
            <button
                onClick={() => dispatch(incrWithAmount(50))}
            >+50</button>

        </div>
    )
}

export default Home