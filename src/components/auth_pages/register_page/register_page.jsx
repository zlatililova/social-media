export function Register({ setPage }) {
    const sumbitTheForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name;
        const body = { name: name.value };

        fetch('http://localhost:3000/register', {
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
                } else {
                    setPage("login")
                }
            })
            .catch(error => console.error(error));
    }


    return (
        <div className="main_div">
            <label className="main_text"> Register here </label>
            <form onSubmit={sumbitTheForm} className="auth_form">
                <input type="text" name="name" placeholder="Enter username" className="name_input" />
                <button type="submit" className="button">Register</button>
            </form>
        </div>
    );
}