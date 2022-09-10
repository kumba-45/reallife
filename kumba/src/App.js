import { React } from "react";
import { Route } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Write from "./Components/Write/Write";
import Topbar from "./Components/Topbar/Topbar";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Log/Login";
import Registration from "./Components/Registration/Registration";
const App = () => {
 

  return (
    <div>
      
        <Topbar />
        
          <Route path="/home">
          
            <Home />
          </Route>
          <Route path="/Registration">
            <Registration />
          </Route>
          <Route path="/About">
             
            <About /> 
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Write">
            <Write />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
        
      
    </div>
  );
};
export default App;
