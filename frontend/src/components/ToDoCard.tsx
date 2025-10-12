import type { ToDo } from "../model/ToDo";

type ToDoCardProps = {
    todo: ToDo;
};

export default function ToDoCard({ todo }: Readonly<ToDoCardProps>) {
    return (
        <>
        <div className="border rounded p-2 m-2 bg-gray-100 shadow-sm">
            <p>{todo.description}</p>
        </div>
        </>
    );
}
