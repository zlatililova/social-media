import "./topNavBar.css"

export function TopNavBar({ userName }) {
    return (
        <div className="navbar__bg">
            <h1>Social Media</h1>
            <h3 className="sign_in">Signed in as: {userName} </h3>
        </div>
    );
}