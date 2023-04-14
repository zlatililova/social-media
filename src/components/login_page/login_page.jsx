export function Login() {
    const sumbitTheForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name;
        const username = name.value;
        console.log(username);
        const body = { name: username };
        /*const requestOptions = {
            method: 'POST',
            headers: {},
            body: JSON.stringify(body)
        };*/
        //console.log("Convert " + JSON.stringify(body));
        fetch('http://localhost:3000/login', {
            method: 'POST',
            credentials: "include",
            headers: {
                Accept: "application/json",
                'Content-Type': "application/json",
                "Access-Control-Allow-Credentials": true
            },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(event => console.log(event));
    }


    return (
        <div>
            <label> Login here </label>
            <form onSubmit={sumbitTheForm}>
                <div>
                    <input type="text" name="name" placeholder="Enter username" />
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}