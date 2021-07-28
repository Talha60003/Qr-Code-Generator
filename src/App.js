

import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter  , Switch ,Route } from 'react-router-dom';
import login from "./Pages/Login";
import home from "./Pages/Home";
import entry from "./Pages/Entry";
import verify from "./Pages/Verify";
import logout from "./Pages/Login";




function App() {
  
  return (
    <> 
    
    <BrowserRouter > 
      

    <Switch>
      {/* <Navbar/> */}
      
    <Route to path="/" exact component={login} />
     <Route to path="/Home"  exact component={home} />
     <Route to path="/Entry"  exact component={entry} />
     <Route to path="/Verify"  exact component={verify} />
     <Route to path="/Login" exact component={logout} />

       

      
    </Switch>
    </BrowserRouter>
 
    
    </>
  );
}

export default App;
