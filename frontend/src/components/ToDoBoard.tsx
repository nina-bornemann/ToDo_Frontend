import { useEffect, useState } from "react";
import { api } from "../api";
import type { ToDo } from "../model/ToDo";
import ToDoCard from "./ToDoCard";

export default function ToDoBoard() {
    const [todos, setToDos] = useState<ToDo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        api.get("/todos")
            .then((response) => {
                setToDos(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setError("Could not load todos");
                setLoading(false);
            });
    }, []);

    const todo = todos.filter((t) => t.status === "todo");
    const doing = todos.filter((t) => t.status === "doing");
    const done = todos.filter((t) => t.status === "done");

    if (loading) return <p>Loading todos...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="flex flex-row justify-around p-4">
            <div>
                <h2>To Do</h2>
                {todo.map((t) => <ToDoCard key={t.id} todo={t} />)}
            </div>
            <div>
                <h2>Doing</h2>
                {doing.map((t) => <ToDoCard key={t.id} todo={t} />)}
            </div>
            <div>
                <h2>Done</h2>
                {done.map((t) => <ToDoCard key={t.id} todo={t} />)}
            </div>
        </div>
    );
}
