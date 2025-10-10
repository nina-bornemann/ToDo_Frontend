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

    function addToDo() {
        if (!newDescription.trim()) return;
        api
            .post("/todo", { description: newDescription, status: "todo" })
            .then((response) => {
                setToDos((prev) => [...prev, response.data]);
                setNewDescription("");
            })
            .catch((err) => console.error("Error adding todo:", err));
    }

    const todo = todos.filter((t) => t.status === "todo");
    const doing = todos.filter((t) => t.status === "doing");
    const done = todos.filter((t) => t.status === "done");

    return (
        <div className="p-4">
            {error && <p className="text-red-500 mb-2">{error}</p>}

            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    placeholder="Enter new ToDo"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    className="border p-1 rounded flex-1 min-w-[200px]"
                />
                <button
                    onClick={addToDo}
                    className="bg-blue-500 text-white px-3 rounded hover:bg-blue-600"
                >
                    Add
                </button>
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
