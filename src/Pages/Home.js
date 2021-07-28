import React from 'react'
import "./Home.css"
import {useHistory} from "react-router-dom"
import {Button} from "@material-ui/core"
import Navbar from "../Components/Navbar"
function Home() {
    const history = useHistory();
    const routeChangeE = () =>{ 
        let path = `Entry`; 
         history.push(path);
       }
    
       const routeChangeV = () =>{ 
        let path = `Verify`; 
         history.push(path);
       }
      
    return (
        <>
        <Navbar/>
<header>
    <div className="overlay">
        <h1>Hiring Department</h1>
        <h3>We keep satisfaction our first priority.</h3>
        <br/>
        <div>
        <Button onClick={routeChangeE}>New Employee</Button>
        <br/>
        <br/>
        <Button onClick={routeChangeV}>Verify Employee</Button>


        </div>
	<br/>
    
    <br/>
<p>A paragraph template is a graphic organizer specifically designed to assist students in writing a paragraph. In particular, paragraph templates help students identify the components of a paragraph (e.g. topic sentence, supporting details, conclusion) as well as their the sequence and order.</p>
    </div>

</header>


        </>
    )
}

export default Home ;
