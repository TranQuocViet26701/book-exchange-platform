import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavbarCustom from './components/NavbarCustom';
import UploadBookForm from './components/UploadBookForm';

function App() {
  return (
    <>
      <NavbarCustom />
      <Router>
        {/* <Route path="/login" component={Login} /> */}
        {/* <Route path="/register" component={Register} /> */}
        <Route path="/create-book" component={UploadBookForm} />
      </Router>
    </>
  );
}

export default App;
