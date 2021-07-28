import React, {useState, useRef} from 'react';
import {Container, Card, CardContent, makeStyles, Grid, TextField, Button, Paper} from '@material-ui/core';
import QRCode from 'qrcode';
import QrReader from 'react-qr-reader';
import EForm from './EForm';
import { ThemeProvider } from 'react-bootstrap';
import * as BsIcons from "react-icons/bs";
import Navbar from "../Components/Navbar"
import { FaBlackberry } from 'react-icons/fa';
import "./Entry.css"

function App() { 
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [scanResultFile, setScanResultFile] = useState('');
  const [scanResultWebCam, setScanResultWebCam] =  useState('');
  const classes = useStyles();
  const qrRef = useRef(null);
  const [state, setState] = React.useState({
    firstName: "",
    lastName: ""
  })


  const generateQrCode = async () => {
    try {
          const response = await QRCode.toDataURL(text);
          setImageUrl(response);
    }catch (error) {
      console.log(error);
    }
  }
  function handleChange(evt) {
    setState({ firstName: evt.target.value });
  }
  const handleErrorFile = (error) => {
    console.log(error);
  }
  const handleScanFile = (result) => {
      if (result) {
          setScanResultFile(result);
      }
  }
  const onScanFile = () => {
    qrRef.current.openImageDialog();
  }
  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    if (result){
        setScanResultWebCam(result);
    }
  }
  
    
  
  return (
   
    
<>
<Navbar/>
    <Paper className={classes.pageContent}>

    <EForm/>
    </Paper>
</>
  );
}

const useStyles = makeStyles((theme) => ({
  conatiner: {
      marginTop: 10
      
    },
    pageContent:{
      margin:theme.spacing(8),
      padding:theme.spacing(7),
      // backgroundColor:  ,
      
    },
    title: {
      display: 'flex',
      justifyContent: 'center',
      alignItems:  'center',
      background: '#3f51b5',
      color: '#fff',
      padding: 20
    },
    btn : {
      marginTop: 10,
      marginBottom: 20
    },
    
}));


export default App;
