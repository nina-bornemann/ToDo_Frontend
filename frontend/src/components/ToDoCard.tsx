import type { ToDo } from "../model/ToDo";

type ToDoCardProps = {
    todo: ToDo;
};

export default function ToDoCard({ todo }: Readonly<ToDoCardProps>) {


    return (
        <>
            <div className={"card"}>
                <p>{todo.description}</p>
                <button>Edit</button>
                <button>Advance</button>
            </div>
        </>
    );
}
