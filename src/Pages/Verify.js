import React from 'react'
import {useState,useEffect,useRef} from 'react';
import QrReader from 'react-qr-reader';
import QRCode from 'qrcode';
import {Grid,Button,makeStyles ,CardContent,Card,Container,Paper} from "@material-ui/core"
import Navbar from "../Components/Navbar"

export default function Verify() {
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
        <Container className={classes.conatiner}>
          <Card>
              
              <CardContent>
                  <Grid container spacing={3} >

        <Grid item  sm={3} xs={6}>
                        <Button className={classes.btn} variant="contained" color="secondary" onClick={onScanFile}>Scan Qr Code</Button>
                        <QrReader
                          ref={qrRef}
                          delay={300}
                          style={{width: '100%'}}
                          onError={handleErrorFile}
                          onScan={handleScanFile}
                          legacyMode
                        />
                        </Grid>
                        <Grid item  sm={3} xs={6}>
                          
                        <Button className={classes.btn} variant="contained" color="secondary" >Using Camera</Button>
                        <QrReader
                         delay={300}
                         style={{width: '100%'}}
                         onError={handleErrorWebCam}
                         onScan={handleScanWebCam}
                         />
                          {scanResultWebCam}
                        </Grid>
                      
                      <Grid item  sm={6} xs={12}>
                      <h3>Details:{scanResultFile} </h3>
                      </Grid>
                      </Grid>
                      </CardContent>
                    </Card>
                </Container>
    </>)
}
const useStyles = makeStyles((theme) => ({
    conatiner: {
        marginTop: 10
      },
      pageContent:{
        margin:theme.spacing(8),
        padding:theme.spacing(7)
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
      }, pageContent:{
        margin:theme.spacing(8),
        padding:theme.spacing(7)
      }
  }));
  



