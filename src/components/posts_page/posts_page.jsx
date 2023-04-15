import { alignPropType } from "react-bootstrap/esm/types";
import { PostCard } from "../post_card/post_card";
import { useEffect, useState } from "react";
import "../post_card/post_card.css"


export function GetAllPosts({ currentUser }) {

    let [posts, addPost] = useState([]);
    let [postsNum, setPostNum] = useState(0);

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
                    setPostNum(postsNum + 1)
                }
            )
            .catch(error => console.error(error));
    }, [postsNum]);


    return (
        <div className="column_container">
            <div className="main_posts_div">
                {posts.map(post => (
                    <PostCard
                        id={post.id}
                        key={post.id}
                        content={post.content}
                        userName={post.userName}
                        likes={post.likes}
                        currentUser={currentUser}
                        callback={setPostNum}
                        numOfPosts={postsNum}
                    />
                ))}
            </div>
        </div>
    );
}