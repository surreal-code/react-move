import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./routes/Home";
import Detail from "./routes/Detail"
import React from "react";


function App() {
  return <Router>
    <Routes>
      <Route path="/movie/:id" element={ <Detail /> }>
      </Route>
      <Route path="/" element={ <Home /> }>
        </Route>
      <Route path="/hello" element= {<h1>Hello</h1> }>
      </Route>
    </Routes>
  </Router>;
}

export default App;
