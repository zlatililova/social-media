import { Login } from "./login_page/login_page";
import { GetAllPosts } from "./posts_page/posts_page";
import { Register } from "./register_page/register_page";
import { useState } from "react";

export function NavComponent() {

    let [page, setPage] = useState("");

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
            <div>
                {
                    {
                        'login': <Login />,
                        'register': <Register />,
                        'posts': <GetAllPosts />
                    }[page]
                }

            </div>
        </div>

    )
}