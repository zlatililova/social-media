export function Init() {

    function transitionPage(page_id) {
        switch (page_id) {
            case "login": {
                console.log(page_id);
                return <Login />;
            }
            case "register":
                return <Register />;
            default:
                return;
        }
    }

    return (
        <div>
            <button
                onClick={() => {
                    transitionPage("login");
                }}
            >
                Login
            </button>
            <button
                onClick={() => {
                    transitionPage("register");
                }}
            >
                Register
            </button>        </div>
    )
}