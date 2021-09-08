import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';
import Home from './components/Home';
import EditEmployee from './components/EditEmployee';




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
      </Switch>

    </div >
  );
}

export default App;
