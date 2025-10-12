import { Routes, Route, Link } from 'react-router-dom';
import ToDoBoard from "./components/ToDoBoard";
import './App.css'
import Welcome from "./components/Welcome.tsx";

function App() {

  return (
    <>
        <nav className="flex gap-4 p-4 bg-gray-100 shadow">
            <Link to="/">Home</Link>
            <Link to="/board">ToDo Board</Link>
        </nav>

        <Routes>
            <Route path="/" element={ <Welcome /> } />
            <Route path="/board" element={ <ToDoBoard />} />
        </Routes>
    </>
  )
}

export default App
