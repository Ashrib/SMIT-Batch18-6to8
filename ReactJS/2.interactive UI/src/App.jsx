import { useState } from 'react'
import './App.css'
import { sculptureList } from './data.js'


function App() {
  let [count, setCount] = useState(0);
  let [indexCount, setIndexCount] = useState(0);
  let [showDetails, setShowDetails] = useState(false);
  // let [array, setArray] = useState([0,1,2,3]);


  let handleNext = () => {
    if (indexCount == sculptureList.length - 1) {
      setIndexCount(0)
      console.log(indexCount)
      return;
    }

    setIndexCount(++indexCount)
    console.log(indexCount)
  }

  return (
    <>

    <div style={{
      margin:'20px'
    }}>
      <h2>count: {count}</h2>
      <button
      onClick={()=>{
        //Queueing a Series of State Updates
        setCount( (pre)=> pre + 1 )
        setCount( (pre)=> pre + 1 )
        setCount( (pre)=> pre + 1 )
        console.log(count) /// not getting updated value

        // setArray(pre => pre.filter(num => num < 3 ))
        // setArray(pre => pre.map(num => num**2 ))
        // console.log(array)
      }}
      >
        +3
      </button>

    </div>



      <div>
        <button onClick={handleNext}>next</button>
      </div>

      <div>
        <h2>{sculptureList[indexCount]?.name}</h2>

        <div>
          {
            (showDetails) ?
            <button onClick={()=> setShowDetails(false)}>hide details</button>
            :
            <button onClick={()=> setShowDetails(true)}>show details</button>
          }

        </div>

          {/* {
            (showDetails) ? 
            <p>Description: {sculptureList[indexCount]?.description}</p>
            : 
            null
          } */}

            {
              showDetails && <p>Description: {sculptureList[indexCount]?.description}</p>
            }
            
        <span>Artist: {sculptureList[indexCount]?.artist}</span>
        <div>
          <img height={200} width={300} src={sculptureList[indexCount]?.url} alt={sculptureList[indexCount]?.alt} />
        </div>
      </div>

    </>
  )
}

export default App


/// routing 