export function Login() {
    const sumbitTheForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name;
        const body = { name: name.value };

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                'Content-Type': "application/json",
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(body),
            credentials: "include",
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    return response.json();
                } else {
                    console.log(JSON.parse(JSON.stringify(response)));
                }
            })
            .then(data => console.log(data))
            .catch(error => console.error(error));
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