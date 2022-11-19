import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import './App.css';
import CreateBook from './pages/CreateBook';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  const loggedIn = false;

  return (
    <>
      <Router>
        <Route exact path="/">
          {!loggedIn ? <Redirect to="/login" /> : <Home />}
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/register" component={SignUp} />
        <Route path="/create-book" component={CreateBook} />
      </Router>
    </>
  );
}

export default App;
