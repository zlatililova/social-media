import { Login } from "./login_page/login_page";
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
            <div>
                {
                    {
                        'login': <Login />,
                        'register': <Register />

                    }[page]
                }

            </div>
        </div>

    )
}