import './App.css'
import UserCard from './components/UserCard.jsx'
import img1 from './assets/hero.png'
import UserListItem from './components/UserListItem.jsx';
import { useEffect, useState } from 'react'
import { fetchWeatherData } from './utilities.js';


function App() {
  let [count, setCount] = useState(0);
  let [users, setUsers] = useState([]);
  let [cityInput, setCityInput] = useState(null);

  let userDataLoaded = true;
  let usersData = [
    {
      user_name: 'user1',
      bio: "hello I'm using this app",
      profile: img1,
    },
    {
      user_name: 'user2',
      bio: "user2 is using this app",
      profile: img1,
    }
  ];

  const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];

  // fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
  // fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lan}&current_weather=true`)


  let fetchUsers = async () => {
    try {
      let response = await fetch('https://dummyjson.com/users');
      response = await response.json();
      setUsers(response.users)
      console.log(response)

    } catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {
    fetchUsers();
  }, []);


  return (
    <>
      <div style={{ margin: '20px' }}>
        <h1>Count: {count}</h1>
        <button onClick={() => {
          setCount(++count);
          console.log(count)
        }}>++</button>

        <button
          onClick={() => setCount(--count)}
        >--</button>

        <button
          onClick={() => setCount(0)}
        >reset</button>
      </div>

      <div
        style={{
          border: '2px solid black', padding: '10px',
          margin: '10px'
        }}>
        <h1>Weather App</h1>

        <div>
          <input placeholder='enter city name' type="text" name="cityName" id="city-input"
            onChange={(e) => setCityInput(e.target.value)}

          />
          <button onClick={async () => console.log(await fetchWeatherData(cityInput))}>search</button>
        </div>
      </div>




      {/* conditional rendering */}
      {
        (users.length > 0) ?
          <>
            {users?.map((user) => {
              return (
                <UserCard
                  bio={user.email}
                  userName={user.username}
                  userProfile={user.image}
                />
              )
            })}


            <div>
              <ul>
                {people.map((item) => {
                  return (
                    <div>
                      <UserListItem userData={item} />
                      <button onClick={() => console.log(true)}>add</button>
                    </div>
                  )
                })

                }
              </ul>
            </div>

          </>
          :
          <h2>no data....</h2>
      }
    </>


  )
}

export default App
