
export function Logout({ callback }) {
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
                }
            })
            .catch(error => console.error(error));
    }


    return (
        <div>
            <label> Logout here </label>
            <button onClick={logout}>Logout</button>
        </div >
    );
}