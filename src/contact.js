import { AccordionDetails, Box, Container, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import { render } from 'react-dom';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Fab from '@material-ui/core/Fab';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Collapse from '@material-ui/core/Collapse';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Snackbar from '@material-ui/core/Snackbar';

const userStyle = makeStyles((theme) => ({
    root :props => ({
        display: 'flex',
        flexGrow: 1,
        height: props.heights,
        backgroundColor: "#000000",
        margin: "0px",
        alignContent:"center",
        backgroundImage: `linear-gradient(rgba(29, 38, 113, 0.8), rgba(195, 55, 100, 0.8)),url("https://bit.ly/2rlzaXi")`,
        backgroundSize:"100% 100%",
        backgroundRepeat:"no-repeat"
    }),
    typoh:{
        color:'#ffffff',
        padding:"25px 0px 0px 0px",
        [theme.breakpoints.down("sm")]:{
            fontSize: "50px",
        },
        [theme.breakpoints.between("sm","md")]:{
            fontSize: "50px",
        },
            [theme.breakpoints.between("md","lg")]:{
            fontSize: "65px",
        },
           [theme.breakpoints.up("lg")]:{
            fontSize: "100px",
        },
    },
    
}));  



export default function Contacts(props){
    const props2 = {heights:window.screen.availHeight}
    const classes = userStyle(props2);
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        var copyText = "kaustav28c@gmail.com";
        navigator.clipboard.writeText(copyText)
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        setOpen(false);
        if (reason === 'clickaway') {
        return;
    }
    }
    
 
    return (
        <div className={classes.root}>
            <Container disableGutters={true}>
            <Typography align="center" className={classes.typoh}>Contacts</Typography>
            <Container align="center" style={{padding:"5% 30% 5% 30%"}}>
            <Button  style={{color:"#ffffff",borderColor:"#ffffff",margin:"25px 0px 25px 0px"}} fullWidth={true} variant="outlined" size="large" onClick={() => {window.location.assign("https://mail.google.com/mail/?view=cm&fs=1&to=kaustav28c@gmail.com&su=enquiry")}}> Email</Button><br />
            <Button  style={{color:"#ffffff",borderColor:"#ffffff",margin:"25px 0px 25px 0px"}} fullWidth={true} variant="outlined" size="large" onClick={() => {window.location.assign("https://www.linkedin.com/in/kaustav-chaudhury-83bba5160")}}>LinkedIn</Button><br />
            <Button  style={{color:"#ffffff",borderColor:"#ffffff",margin:"25px 0px 25px 0px"}} fullWidth={true} variant="outlined" size="large" onClick={() => {window.location.assign("https://twitter.com/KaustavInt28")}}>   Twitter   </Button><br />
            <Button  style={{color:"#ffffff",borderColor:"#ffffff",margin:"25px 0px 25px 0px"}} fullWidth={true} variant="outlined" size="large" onClick={() => {window.location.assign("https://github.com/maxkaustav")}}>   Github   </Button><br />
            <Button  style={{color:"#ffffff",borderColor:"#ffffff",margin:"25px 0px 25px 0px"}} fullWidth={true} variant="outlined" size="large" onClick={() => {window.location.assign("https://www.dropbox.com/s/u5svmh84l3nacyb/Copy%20of%20Resume1%20%281%29.pdf?dl=1")}}>   Download Resume   </Button><br />
            <Snackbar
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="EMAIL COPIED TO CLIPBOARD"/>
            </Container>
            </Container>
        </div>
    );
}


