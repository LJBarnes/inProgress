import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Adventures from "./pages/adventures/adventures";
// import About from "./pages/About";
// import Search from "./pages/Search";
import Navbar from "./components/navbar/navbar";

import Wrapper from "./components/wrapper/wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          
          <Route exact path="/adventures" component={Adventures} />
          
        </Wrapper>
        
      </div>
    </Router>
  );
}

export default App;
