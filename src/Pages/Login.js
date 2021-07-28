import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import {BrowserRouter  , Switch ,Route,useHistory } from 'react-router-dom';
import entry from "../Pages/Entry"
import history from './history';
export default function Login() {
  


  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const history = useHistory();
  function handleSubmit(event) {
    event.preventDefault();
    if(email=="Talha" && password=="12345"){
      
      const routeChange = () =>{ 
        let path = `\Home`; 
         history.push(path);
       }
       const validate=routeChange();
       

    }else{
      alert("Please enter correct UserName and Passowrd!")
    }
    
  }
  
  return (
    <div className="Login form">
      <Form onSubmit={handleSubmit } >
        <Form.Group size="lg" controlId="email">
          <Form.Label>UserName : </Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password :</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit"  
        
           >
          Login
        
         </Button>
      </Form>
    </div>
  );
}

