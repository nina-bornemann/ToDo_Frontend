import './App.css'

function App() {

  return (
    <>
        <div className={"flex flex-col gap-16"}>
            <h1>Super Kanban</h1>
            <div className={"flex flex-row justify-between"}>
                <button><h2>Home</h2></button>
                <button><h2>ToDo</h2></button>
                <button><h2>Doing</h2></button>
                <button><h2>Done</h2></button>
            </div>

            <div className={"flex flex-row m-16 gap-16"}>
                <div>
                    <h3>ToDo</h3>
                    <div>
                        <div className={"flex flex-col gap-4 rounded-2xl bg-zinc-700 w-72"}>
                            <p>Description</p>
                            <p>Status</p>
                            <button className={"mx-16"}>Details</button>
                            <button className={"mx-16"}>Advance</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Doing</h3>
                    <div>
                        <div className={"flex flex-col gap-4 rounded-2xl bg-zinc-700 w-72"}>
                            <p>Description</p>
                            <p>Status</p>
                            <button className={"mx-16"}>Details</button>
                            <button className={"mx-16"}>Advance</button>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Done</h3>
                    <div>
                        <div className={"flex flex-col gap-4 rounded-2xl bg-zinc-700 w-72"}>
                            <p>Description</p>
                            <p>Status</p>
                            <button className={"mx-16"}>Details</button>
                            <button className={"mx-16"}>Advance</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <input type={"text"} placeholder={"Enter your ToDo"}/>
                <button>Add</button>
            </div>
        </div>
    </>
  )
}

export default App
