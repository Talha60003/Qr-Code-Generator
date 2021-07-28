import { TextField ,Grid,makeStyles,FormControl,FormControlLabel,RadioGroup,Radio,FormLabel} from '@material-ui/core';
import React,{useState,useEffect,useRef} from 'react';
import   Controls  from '../Components/controls/Controls';
import   * as departmentservices  from '../Components/services/departments';
import {useForms,Form} from '../Components/useForms';
import QRCode from 'qrcode';
import QrReader from 'react-qr-reader';
import {Container, Card, CardContent,  Button, Paper} from '@material-ui/core';

const genderItems=[
    {id:"male",title:"Male"},
    {id:"female",title:"FeMale"},
    {id:"others",title:"Others"}
]

const initalizeFValues={
    id:0,
    firstName:"",
    lastName:"",
    email:"",
    mobile:"",
    city:"",
    address:"",
    gender:"male",
    departmentId:"",
    hiredate:new Date(),
    isPermanent:false,
}
function EForm() {
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

   
    const{
        values,
        setValues,
        handleInputChange
    }=useForms(initalizeFValues);
    
    return (
<>
        


        
            <Form className="Form reset">

            <Grid container spacing={3}> 
                <Grid item xs={4} sm={4}>
                    <Controls.Input
                   
                    name="firstName"
                    label="First Name"

                    value={values.firstName}
                    onChange={handleInputChange}
                    
                    />
                    
                    <Controls.Input
                    
                    name="lastName"
                    label="Last Name"
                    value={values.lastName}
                    onChange={handleInputChange}
                    />
                    <Controls.Input
                    
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleInputChange}
                    />
                    <Controls.Input
                    
                    name="mobile"
                    label="Mobie"
                    
                    value={values.mobile}
                    onChange={handleInputChange}
                    />
                    <Controls.Input
                    
                    name="city"
                    label="City"
                    value={values.city}
                    onChange={handleInputChange}
                    />
                    <Controls.Input
                   
                   name="address"
                    label="Address"
                    value={values.address}
                    onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={4} sm={4}>
                
                    
                    <Controls.RadioGroup 
                    name="gender"
                    label="Gender"
                    value={values.gender}
                    onChange={handleInputChange}
                    items={genderItems}
                    />
                   <Controls.Select
                    name="departmentId"
                    label="Department"
                    value={values.departmentId}
                    onChange={handleInputChange}
                    options={departmentservices.getDepartname()}
                   />
                   <Controls.CheckBox
                   name="isPermanent"
                   label="Permanent Employee"
                   value={values.isPermanent}
                   onChange={handleInputChange}
                   />
                   <Controls.DatePicker
                   name="hiredate"
                   label="Hire Date"
                   value={values.hiredate}
                   onChange={handleInputChange}
                   />
                <Container className={classes.conatiner}>
          
    </Container> 

                </Grid>
                <Grid  sm={3} xs={6}>
                        
                        <TextField label="Yes"  onChange={(e) => setText(JSON.parse(JSON.stringify("First Name : "+values.firstName+
                        "                                            Last Name : "+values.lastName+"                                            Email  : "+values.email+"                                            Mobile : "+values.mobile+
                        "                                            City : "+values.city+"                                            Address : "+values.address+"                                            Gender : "+values.gender+"                                            Department : "+
                        values.departmentId+"                                            Permanent : "+values.isPermanent+"                                            Hiring Date : "+values.hiredate)))}/>    
                        <div>
                     <Controls.Button
                     color="default"
                     text="Reset"
                     
                     
                     />
 
 <Button className={classes.btn} variant="contained" 
                             color="primary"  onClick={() => generateQrCode()}>Generate Qr-Code</Button>
                           
                 </div>
                   
                             
                             
                             {imageUrl ? (
                               <a href={imageUrl} download>
                                   <img src={imageUrl} alt="img"/>
                               </a>) : null}
                       
                       
                   </Grid>
            </Grid>
        </Form>
       
            </>

        
    )
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
      }
  }));
  

export default EForm
