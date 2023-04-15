import "../auth_pages/auth_pages.css"

export function CreatePost({ setPage }) {


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
                    setPage("posts")
                }
            })
            .catch(error => console.error(error));
    }


    return (
        <div className="main_div">
            <label className="main_text"> Create a post </label>
            <form onSubmit={CreatePost} className="auth_form">
                <input type="text" name="content" placeholder="Enter post Content" className="name_input" />
                <button type="submit" className="button">Create a post</button>
            </form>
        </div>
    );
}