import './App.css'
import UserCard from './components/UserCard.jsx'
import img1 from './assets/hero.png'
import UserListItem from './components/UserListItem.jsx';
import { useState } from 'react'



function App() {

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


  // let count = 0;

  let [count, setCount] = useState(0);
  let [users, setUsers] = useState([]);
  let [products, setProducts] = useState(null);



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

      {/* conditional rendering */}
      {
        (userDataLoaded) ?
          <>
            <UserCard
              bio={usersData[0].bio}
              userName={usersData[0].user_name}
              userProfile={usersData[0].profile}
            />
            <UserCard
              bio={usersData[1].bio}
              userName={usersData[1].user_name}
              userProfile={usersData[1].profile}
            />

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
