
export function Logout({ callback, setPage }) {
    const logout = () => {

        fetch('http://localhost:3000/logout', {
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
                }
                else {
                    console.log("Logged out")
                    callback("")
                    setPage("login")
                }
            })
            .catch(error => console.error(error));
    }


    return (
        <div className="main_div auth_form" >
            <label className="main_text"> Logout here </label>
            <button onClick={logout} className="button">Logout</button>
        </div >
    );
}