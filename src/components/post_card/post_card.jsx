import { useState } from "react";

export function PostCard({ id, content, likes, userName, currentUser }) {

    const user = (userName === currentUser);

    const [like, addLike] = useState(likes); // integer state


    const likePost = () => {
        fetch('http://localhost:3000/posts/' + id + '/like', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                'Content-Type': "application/json",
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Origin": "*"
            },
            credentials: "include",
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                } else {
                    console.log("Success like");
                    addLike(like + 1)
                }
            })
            .catch(error => console.error(error));
    }

    return (
        <div style={{ border: '1px solid black', margin: "50px" }}>
            <h3>{userName}</h3>
            <h1>{content}</h1>
            <small>{like}</small>
            <button onClick={likePost}>Like</button>
            {
                console.log(user)}{
                user && <button>Delete</button>
            }

        </div>
    )
}