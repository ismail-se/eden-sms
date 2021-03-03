import "./App.css";
import Login from "./pages/Login/Login"
import Dashboard from "./pages/Dashboard/Dashboard"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return ( 
    <Router>
      <div className="app">
        <Switch>
        <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
   );
}
 
export default App;