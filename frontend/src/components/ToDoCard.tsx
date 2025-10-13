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
    const [isEditing, setIsEditing] = useState<boolean>(false)

    function handleDescriptionChange() {
        axios
            .put(`/api/todo/${props.todo.id}`, {id:props.todo.id, description: updatedDescription, status: updatedStatus})
            .then((r) => {
                setUpdatedDescription(r.data.description)
                setUpdatedToDo({id: props.todo.id, description: updatedDescription, status:props.todo.status})
                console.log(updatedToDo)
            })
            .catch((e) => console.log(e))
    }

    return (
        <>
            <div className={"card"}>
                {!isEditing && <p>{updatedDescription}</p>}

                {isEditing && <input className={"cardInputField"}
                                     type={"text"}
                                     name={"input"}
                                     value={updatedDescription}
                                     placeholder={"Enter adjusted description"}
                                     onChange={(e) => setUpdatedDescription(e.target.value)}/>}
                <div className={"cardButtons"}>
                {!isEditing && <button onClick={() => setIsEditing(!isEditing)}>Edit ✏️</button>}
                {isEditing && <button onClick={() => {handleDescriptionChange(); setIsEditing(!isEditing)}}>Save</button>}
                <button>Advance</button>
                </div>
            </div>
        </>
    );
}
