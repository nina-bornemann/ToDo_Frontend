import { Routes, Route} from 'react-router-dom';
import ToDoBoard from "./components/ToDoBoard";
import './App.css'
import Welcome from "./components/Welcome.tsx";
import NavBar from "./components/NavBar.tsx";

function App() {

  return (
    <>
        <NavBar/>
        <Routes>
            <Route path={"/"} element={ <Welcome /> } />
            <Route path={"/board"} element={ <ToDoBoard />} />
        </Routes>
    </>
  )
}

export default App
