import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
