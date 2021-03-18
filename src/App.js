import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Department from "./components/Department";
import Agent from "./components/Agent";

function App() {
  return (
    <Router>
      <header className="header">
        <h1>AgentMS</h1>
      </header>

      <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/agent" component={Agent} />
          <Route path="/department" component={Department} />
        </Switch>
    </Router>
  );
}

export default App;
