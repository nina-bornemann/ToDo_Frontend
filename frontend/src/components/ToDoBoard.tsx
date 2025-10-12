import { useEffect, useState } from "react";
import { api } from "../api";
import type { ToDo } from "../model/ToDo";
import ToDoCard from "./ToDoCard";

export default function ToDoBoard() {
    const [todos, setToDos] = useState<ToDo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [newDescription, setNewDescription] = useState("");

    // Fetch todos from backend
    useEffect(() => {
        api
            .get("/todo") // your backend endpoint
            .then((response) => {
                setToDos(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error loading todos:", err);
                setError("Could not load todos from server.");
                setLoading(false);
            });
    }, []);

    const todo = todos.filter((t) => t.status === "todo");
    const doing = todos.filter((t) => t.status === "doing");
    const done = todos.filter((t) => t.status === "done");

    return (
        <div>
            {error && <p>{error}</p>}

            <div>
                <input
                    type="text"
                    placeholder="Enter new ToDo"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                />
                <button> Add </button>
            </div>
            {loading && <p>Loading todos...</p>}

            {!loading && (
                <div className="flex flex-row justify-around gap-4">
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
            )}
        </div>
    );
}
