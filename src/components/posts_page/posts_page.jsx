import { PostCard } from "../post_card/post_card";
import { useEffect, useState } from "react";


export function GetAllPosts({ currentUser }) {

    let [posts, addPost] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/posts', {
            method: 'GET',
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
                }
                else {
                    return response.json();
                }
            })
            .then(
                (data) => {
                    addPost(data)
                }
            )
            .catch(error => console.error(error));
    }, []);


    return (
        <div>
            <label> Posts </label>
            <div>
                {posts.map(post => (
                    <PostCard
                        key={post.id}
                        content={post.content}
                        userName={post.userName}
                        likes={post.likes}
                        currentUser={currentUser}
                    />
                ))}
            </div>
        </div>
    );
}