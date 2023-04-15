import "./App.css";
import { useState } from "react";
import { SideBar } from "./components/side_bar/nav_component";
import { TopNavBar } from "./components/top_nav_bar/topNavBar";
import { Login } from "./components/auth_pages/login_page/login_page";
import { Register } from "./components/auth_pages/register_page/register_page";
import { GetAllPosts } from "./components/posts_page/posts_page";
import { CreatePost } from "./components/create_post/create_post";
import { Logout } from "./components/auth_pages/logout_page/logout_page";

function App() {
  let [userName, setUserName] = useState("");
  let [page, setPage] = useState("");

  return (
    <div className="App">
      <header>
        <TopNavBar userName={userName} />
      </header>

      <main>
        <SideBar username={userName} setPage={setPage} />
        <div className="main_content">
          {
            {
              login: <Login callback={setUserName} setPage={setPage} />,
              register: <Register callback={setUserName} setPage={setPage} />,
              posts: <GetAllPosts currentUser={userName} />,
              create: <CreatePost setPage={setPage} />,
              logout: <Logout callback={setUserName} setPage={setPage} />,
            }[page]
          }
        </div>
        {console.log(userName)}
      </main>
    </div>
  );
}

export default App;

/*{
          {
            "login": <Login callback={callback} />,
            "register": <Register />,
            "posts": <GetAllPosts currentUser={username} />,
            "create": <CreatePost />,
            "logout": <Logout callback={callback} />,
          }[page]*/
