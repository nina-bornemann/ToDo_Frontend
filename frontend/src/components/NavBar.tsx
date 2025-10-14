import {Link} from "react-router-dom";

export default function NavBar() {

    return (
        <>
            <div className={"header"}>
                <div className={"nav"}>
                    <Link className={"navText"} to={"/"}>Home</Link>
                    <Link className={"navText"} to={"/board"}>ToDo Board</Link>
                </div>
            </div>
        </>
    )
}