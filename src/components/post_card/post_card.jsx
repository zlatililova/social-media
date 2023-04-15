export function PostCard({ content, likes, userName, currentUser }) {

    const user = (userName === currentUser);

    return (
        <div style={{ border: '1px solid black', margin: "50px" }}>
            <h3>{userName}</h3>
            <h1>{content}</h1>
            <small>{likes}</small>
            {
                console.log(user)}{
                user && <button>Delete</button>
            }
        </div>
    )
}