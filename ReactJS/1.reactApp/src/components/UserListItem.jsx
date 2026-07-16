
const UserListItem = ({userData}) => {



  return (
    <li 
    
    style={{
        border: '3px solid black',
        padding: '20px', marginTop:'10px'
    }}
    >{userData}</li>
  )
}

export default UserListItem