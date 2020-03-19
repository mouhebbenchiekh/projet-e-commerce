import React from 'react';
import Homepage from "./Pages/homepage.component"
import {Router, Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
     
        <Route exact component={Homepage} path="/book"/>
     
    </div>
  );
}

export default App;
