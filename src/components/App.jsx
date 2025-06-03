import "../styles/App.scss";
import studentsData from "../data/students.json";
import Header from "./Header";

function App() {
  const students = studentsData.results; 

  return (
    <div className="app">
      <Header />
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

