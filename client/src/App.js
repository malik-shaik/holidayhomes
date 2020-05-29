import React from "react";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./components/auth/Signup";
import Homes from "./components/layout/Homes";
import CreateHome from "./components/auth/CreateHome";
import Login from "./components/auth/Login";
import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";

// uncomment this...

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homes} />
            <Route exact path="/home/:id" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/createhome" component={CreateHome} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
