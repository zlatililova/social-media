export function PostCard({ content, likes, userName }) {

    return (
        <div >
            <h3>{userName}</h3>
            <h1>{content}</h1>
            <small>{likes}</small>
        </div>
    )
}