import { useState } from "react";
import "./post_card.css"

export function PostCard({ id, content, likes, userName, currentUser, callback, numOfPosts }) {

    const user = (userName === currentUser);
    const noUser = (currentUser !== "");

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

    const deletePost = () => {
        fetch('http://localhost:3000/posts/' + id, {
            method: 'DELETE',
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
                    console.log("Success delete");
                    alert("The post was deleted");
                    callback(numOfPosts - 1)
                }
            })
            .catch(error => console.error(error));

    }

    return (
        <div className="post_card_div">
            <h3 className="username_h3">{userName}</h3>
            <hr style={{
                background: 'black',
                color: 'black',
                height: '1px',
                width: "100%"
            }} />
            <h1>{content}</h1>
            <div className="like_div">
                <small>Likes: {like}</small>
                {
                    noUser && <button onClick={likePost} className="like_btn">Like</button>
                }
                {
                    (user && noUser) && <button onClick={deletePost} className="delete_btn">Delete</button>
                }
            </div>
        </div>
    )
}