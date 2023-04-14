import { Login } from "./login_page/login_page";
import { Register } from "./register_page/register_page";
import { useState } from "react";

export function NavComponent() {

    let [page, setPage] = useState("");


    return (
        <div>
            <button
                onClick={() => {
                    setPage("foo");
                }}>
                Login
            </button>
            <button
                onClick={() => {
                    setPage("bar")
                }}
            >
                Register
            </button>
            <div>
                {//(page) ? <Login /> : <Register />
                    {
                        'foo': <Login />,
                        'bar': <Register />
                    }[page]
                }

            </div>
        </div>

    )
}