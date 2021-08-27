import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
import About from './components/About';
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert("Light mode has been enabled", 'success');
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Form heading="Text" mode={Mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
