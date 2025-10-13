import {useEffect, useState} from "react";
import type {ToDo} from "../model/ToDo";
import ToDoCard from "./ToDoCard";
import axios from "axios";
import type {ToDoDto} from "../model/ToDoDto.tsx";

export default function ToDoBoard() {
    const [todos, setToDos] = useState<ToDo[]>([]);
    const [error, setError] = useState<string | null>(null);

    const [newDescription, setNewDescription] = useState("");

    useEffect(() => {
        axios
            .get("/api/todo")
            .then((r) => {
                setToDos(r.data)
            })
            .catch((e) => {
                console.log(e)
                setError("Could not load todos")
            })
    }, []);

    let todo = todos.filter((t) => t.status === "OPEN");
    let doing = todos.filter((t) => t.status === "IN_PROGRESS");
    let done = todos.filter((t) => t.status === "DONE");

    function handleCreate() {

        const newToDo:ToDoDto = {description: newDescription, status: "OPEN"}

        axios
            .post("/api/todo", newToDo)
            .then((r) => {
                console.log(r.data)
                setToDos((prev) => {
                    return [...prev, r.data];
                })
                setNewDescription("")
            })
            .catch((e) => setError(e))
    }

    return (
        <div>
            {error && <p>{error}</p>}

            <div>
                <input
                    type="text"
                    placeholder="Enter new ToDo"
                    onChange={(e) => setNewDescription(e.target.value)}
                />
                <button onClick={handleCreate}> Add </button>
            </div>

            <div className={"allCards"}>
                <div>
                    <h2>To Do</h2>
                    {todo.length > 0 ? todo.map((t) => <ToDoCard key={t.id} todo={t} />) : <p>No todos</p>}
                </div>
                <div>
                    <h2>Doing</h2>
                    {doing.length > 0 ? doing.map((t) => <ToDoCard key={t.id} todo={t} />) : <p>Nothing in progress</p>}
                </div>
                <div>
                    <h2>Done</h2>
                    {done.length > 0 ? done.map((t) => <ToDoCard key={t.id} todo={t} />) : <p>Nothing done yet</p>}
                </div>
            </div>
        </div>
    );
}
