import type { ToDo } from "../model/ToDo";
import axios from "axios";
import {useState} from "react";

type ToDoCardProps = {
    todo: ToDo;
};

export default function ToDoCard(props: Readonly<ToDoCardProps>) {

    const [updatedDescription, setUpdatedDescription] = useState<string>(props.todo.description)
    const [updatedStatus, setUpdatedStatus] = useState<ToDo["status"]>(props.todo.status)
    const [updatedToDo, setUpdatedToDo] = useState(props.todo)
    const [isDescriptionEditing, setIsDescriptionEditing] = useState<boolean>(false)
    const [isStatusEditing, setIsStatusEditing] = useState<boolean>(false)

    function handleDescriptionChange() {
        axios
            .put(`/api/todo/${props.todo.id}`, {id:props.todo.id, description: updatedDescription, status: updatedStatus})
            .then((r) => {
                setUpdatedDescription(r.data.description)
                setUpdatedToDo({id: props.todo.id, description: updatedDescription, status:updatedStatus})
                console.log(updatedToDo)
            })
            .catch((e) => console.log(e))
    }

    function handleStatusChange() {
        axios
            .put(`/api/todo/${props.todo.id}`, {id:props.todo.id, description: updatedDescription, status: updatedStatus})
            .then((r) => {
                setUpdatedStatus(r.data.status)
                setUpdatedToDo({id: props.todo.id, description: updatedDescription, status:props.todo.status})
            })
            .catch((e) => console.log(e))
    }

    return (
        <>
            <div className={"card"}>
                {!isDescriptionEditing && <p>{updatedDescription}</p>}

                {isDescriptionEditing && <input className={"cardInputField"}
                                     type={"text"}
                                     name={"input"}
                                     value={updatedDescription}
                                     placeholder={"Enter adjusted description"}
                                     onChange={(e) => setUpdatedDescription(e.target.value)}/>}
                {isStatusEditing &&
                    <label>
                        <select id={"statusOptions"}
                                name={"statusOptions"}
                                value={updatedStatus}
                                onChange={(o) => setUpdatedStatus(o.target.value as "OPEN" | "IN_PROGRESS" | "DONE")}>
                            <option value={"DONE"}>ToDo</option>
                            <option value={"IN_PROGRESS"}>Doing</option>
                            <option value={"DONE"}>Done</option>
                        </select>
                    </label>}

                <div className={"cardButtons"}>
                    {!isDescriptionEditing && <button onClick={() => setIsDescriptionEditing(!isDescriptionEditing)}>Edit ✏️</button>}
                    {isDescriptionEditing && <button onClick={() => {handleDescriptionChange(); setIsDescriptionEditing(!isDescriptionEditing)}}>Save</button>}

                    {!isStatusEditing && <button onClick={() => setIsStatusEditing(!isStatusEditing)}>Advance ⏭️</button>}
                    {isStatusEditing && <button onClick={() => {handleStatusChange(); setIsStatusEditing(!isStatusEditing)}}>Save</button>}
                </div>
            </div>
        </>
    );
}
