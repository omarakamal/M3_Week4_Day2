import logo from './logo.svg';
import "./App.css";
import { Routes, Route } from "react-router-dom"; // <== IMPORT

import Navbar from "./components/Navbar";     // <== IMPORT
import HomePage from "./pages/Homepage";     // <== IMPORT
import ProjectList from './pages/ProjectList';
import AddProject from './pages/AddProject';
import Project from './pages/Project';


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path='/projects/:projectId' element={<Project></Project>}></Route>
        <Route path='/projects/add' element={<AddProject></AddProject>}></Route>

      </Routes>

    </div>
  );
}

export default App;
