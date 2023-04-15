import { Login } from "./login_page/login_page";
import { GetAllPosts } from "./posts_page/posts_page";
import { Register } from "./register_page/register_page";
import { useState } from "react";
import { CreatePost } from "./create_post/create_post";

export function NavComponent() {

    let [page, setPage] = useState("");
    let [username, setUsername] = useState("")

    return (
        <div>
            <button
                onClick={() => {
                    setPage("login");
                }}>
                Login
            </button>
            <button
                onClick={() => {
                    setPage("register")
                }}
            >
                Register
            </button>
            <button
                onClick={() => {
                    setPage("posts")
                }}
            >
                Posts
            </button>
            <button
                onClick={() => {
                    setPage("create")
                }}
            >
                Create Post
            </button>
            <div>
                {
                    {
                        'login': <Login callback={setUsername} />,
                        'register': <Register />,
                        'posts': <GetAllPosts />,
                        'create': <CreatePost />
                    }[page]
                }
            </div>

        </div>

    )
}