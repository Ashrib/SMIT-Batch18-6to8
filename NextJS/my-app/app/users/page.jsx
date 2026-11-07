import { getUsers } from "../lib/users";
import RefreshUsers from "../lib/usersRefresh";

export default async function Users() {

    let users = await getUsers()

    console.log(users)

  return (
    <div>
      <div>
        <RefreshUsers />
      </div>


      {
        users?.map((user) => {
          return (
            <div 
              style={{border:'1px solid black', margin:'10px', padding:'10px'}}
            key={user.id}>
              <h1>{user.firstName} {user.lastName}</h1>
              <p>{user.email}</p>
            </div>
          )
        })
      }
    

    </div>
  );
}
