
import "./side_bar.css"

export function SideBar({ setPage, username }) {

    let isUserLogged = (username === "")
    console.log(isUserLogged)
    console.log(username)

    return (

        isUserLogged ? (
            <div className="sidebar">
                <button className="nav_button" onClick={() => { setPage("login"); }}>Login</button>
                <button className="nav_button" onClick={() => { setPage("register") }}>Register</button>
            </div>)
            : (
                <div className="sidebar">
                    <button className="nav_button" onClick={() => { setPage("logout") }}>Logout</button>
                    <button className="nav_button" onClick={() => { setPage("posts") }}>Posts</button>
                    <button className="nav_button" onClick={() => { setPage("create") }}>Create Post</button>
                </div>)
    )
}