import './user_card.css'

function UserCard({ bio, userName, userProfile }) {

    console.log(bio);
    console.log(userName);

    return (
        <div className="user-card"
        >
            <div className="img-div">
                <img src={userProfile} alt="" />
            </div>
            <div className="details">
                <h2 className="user-name">{userName}</h2>
                <p className="bio">
                    {bio}
                </p>
            </div>
        </div>
    )
}

export default UserCard;