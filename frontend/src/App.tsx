import { Route, Routes } from "react-router-dom";
import './App.css'
import Card from "./Card.tsx";
import NavBar from "./NavBar.tsx";

function App() {

  return (
    <>
        <div className={"flex flex-col gap-16"}>

            <NavBar/>

            <Routes>
            <Route path={"/home"} element={
                <div className={"flex flex-row m-16 gap-16"}>
                    <div>
                        <h3>ToDo</h3>
                        <div>
                            <Card description={"test"} status={"open"}/>
                        </div>
                    </div>
                    <div>
                        <h3>Doing</h3>
                        <div>
                            <Card description={"test-3"} status={"doing"}/>

                        </div>
                    </div>
                    <div>
                        <h3>Done</h3>
                        <div>
                            <Card description={"test-3"} status={"done"}/>
                        </div>
                    </div>
                </div>
            } />

                <Route path={"/todo"} />
                <Route path={"/doing"}/>
                <Route path={"/done"}/>

            </Routes>

            <div>
                <input type={"text"} placeholder={"Enter your ToDo"}/>
                <button>Add</button>
            </div>
        </div>
    </>
  )
}

export default App
