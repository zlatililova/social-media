export function CreatePost() {


    const CreatePost = (event) => {
        event.preventDefault();
        const form = event.target;
        const content = form.content;
        const body = { content: content.value };

        fetch('http://localhost:3000/posts', {
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
                    console.log("Success post creation");
                }
            })
            .catch(error => console.error(error));
    }


    return (
        <div>
            <label> Create a post </label>
            <form onSubmit={CreatePost}>
                <div>
                    <input type="text" name="content" placeholder="Enter post Content" />
                    <button type="submit">Create a post</button>
                </div>
            </form>
        </div>
    );
}