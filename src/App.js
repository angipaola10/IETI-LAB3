import React,{useEffect} from 'react';
import MainView from './components/MainView';
import Login from './components/Login';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function App() {

  useEffect(function () {
    let currentPath = window.location.pathname;
    let nextPath = validate(currentPath)
    if (currentPath !== nextPath) {
      window.location.href = nextPath;
    }
  }, []);

  const validate = () => {
    if (localStorage.getItem("loggingStaus") === "logged") return "/mainView";
    return "/";
  }

  const loginView = () => (
    <Login />
  );

  const mainView = () => (
    <MainView />
  );


  return (
    <Router>
          <Route exact path="/" component={loginView} />
          <Route path="/mainView" component={mainView} />
    </Router>
  );
}

export default App;
