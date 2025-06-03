import "../styles/App.scss";
import studentsData from "../data/students.json";
import Header from "./Header";
import Main from "./Main";
import { useState } from "react";

function App() {
  const [filterName, setFilterName] = useState(""); //variable de estado llamada filterName
  const handleInputFilter = (ev) => {
    setFilterName (ev.target.value.toLowerCase());
  };
  const students = studentsData.results.filter((student) => student.name.toLowerCase().includes(filterName)
);
  
  return (
  
    <div className="app">
      <Header />
      <Main handleInputFilter={handleInputFilter}/>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.counselor}</td>
              <td>{student.speciality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

