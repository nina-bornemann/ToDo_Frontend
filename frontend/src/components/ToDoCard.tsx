import type { ToDo } from "../model/ToDo";

type ToDoCardProps = {
    todo: ToDo;
};

export default function ToDoCard({ todo }: Readonly<ToDoCardProps>) {
    return (
        <>
            <p>{todo.description}</p>
            <button>Edit</button>
            <button>Advance</button>
        </>
    );
}
