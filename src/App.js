import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(false);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(false);
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
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <>
      <Router>
        <div style={{ height: '50px' }}>
          <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
        </div>
        <Modal show={alert ? true : false} onHide={() => {setAlert(false)}}>
          <Modal.Header closeButton>
            <Modal.Title><strong><div className="text-center">{capitalize(alert ? alert.type : "")}</div></strong></Modal.Title>
          </Modal.Header>
          <Modal.Body><div className="text-center">{alert ? alert.message : ""}</div></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => {setAlert(false)}}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
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
