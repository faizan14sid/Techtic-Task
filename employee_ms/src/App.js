import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import Home from './components/Home';
import EditEmployee from './components/EditEmployee';
import AddLeave from './components/Leave';

function App() {

  return (
    <div className="App">

      <h1>Employee Management System</h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/add-employee">
          <AddEmployee />
        </Route>
        <Route path="/edit-employee/:id">
          <EditEmployee />
        </Route>
        <Route path="/addleave/:id">
          <AddLeave />
        </Route>
      </Switch>

    </div >
  );
}

export default App;
