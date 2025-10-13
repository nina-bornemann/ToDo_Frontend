import type { ToDo } from "../model/ToDo";
import axios from "axios";
import {useState} from "react";

type ToDoCardProps = {
    todo: ToDo;
};

export default function ToDoCard({ todo }: Readonly<ToDoCardProps>) {

    const [updatedDescription, setUpdatedDescription] = useState<string>("")
    const [updatedStatus, setUpdatedStatus] = useState<string>("")

    function handleChange() {
        axios.put("api/todo/:id")
    }

    return (
        <>
            <div className={"card"}>
                <p>{todo.description}</p>
                <button onClick={handleChange}>Edit</button>
                <button>Advance</button>
            </div>
        </>
    );
}
