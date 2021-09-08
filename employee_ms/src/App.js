import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import EmployeeList from './components/EmployeeList';


function App() {

  const employeeList = useSelector((state) => {
    return state.employee.details;
  })

  return (
    <div className="App">
      <h1>Employee Management System</h1>
      <EmployeeList />

    </div>
  );
}

export default App;
