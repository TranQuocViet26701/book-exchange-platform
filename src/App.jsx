import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavbarCustom from './components/NavbarCustom';
import CreateBook from './pages/CreateBook';
import Home from './pages/Home';
import Login from './pages/Login';
import Notification from './pages/Notifications';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import User from './pages/User';

function MainApp() {
  return (
    <>
      <NavbarCustom />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create-book" component={CreateBook} />
        <Route path="/user/:userId" component={User} />
        <Route path="/profile" component={Profile} />
        <Route path="/notification/:id" component={Notification} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={SignUp} />
        <Route path="/" component={MainApp} />
      </Switch>
    </Router>
  );
}

export default App;
