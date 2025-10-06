type ToDoModel = {
    id:string
    description:string
    status:string
}

export const allTodos:ToDoModel[] = [
    {
        id: "123",
        description: "testibus",
        status: "open"
    },
    {
        id: "1234",
        description: "testus",
        status: "doing"
    }
]