import { useNavigate } from "react-router-dom";

export default function NavBar() {

    const nav = useNavigate();

    function navigateHome() {
        nav("/home")
    }
    function navigateTodo() {
        nav("/todo")
    }
    function navigateDoing() {
        nav("/doing")
    }
    function navigateDone() {
        nav("/done")
    }

    return (
        <>
            <h1>Super Kanban</h1>
            <div className={"flex flex-row justify-between"}>
                <button onClick={navigateHome}><h2>Home</h2></button>
                <button onClick={navigateTodo}><h2>ToDo</h2></button>
                <button onClick={navigateDoing}><h2>Doing</h2></button>
                <button onClick={navigateDone}><h2>Done</h2></button>
            </div>
        </>
    )
}