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


export default function Sv(props){
    const props2 = {heights:window.screen.availHeight}
    const classes = userStyle(props2);
 
    return (
        <div className={classes.root}>
            <Container disableGutters={true}>
            <Typography align="center" className={classes.typoh}>Contacts2</Typography>
            <Container align="center" style={{padding:"5% 30% 5% 30%"}}>
            <Button  style={{color:"#ffffff",borderColor:"#ffffff",margin:"25px 0px 25px 0px"}} fullWidth={true} variant="outlined" size="large">   Email   </Button><br />
            <Button  style={{color:"#ffffff",borderColor:"#ffffff",margin:"25px 0px 25px 0px"}} fullWidth={true} variant="outlined" size="large" onClick={() => {window.location.assign("https://www.linkedin.com/in/kaustav-chaudhury-83bba5160")}}>LinkedIn</Button><br />
            <Button  style={{color:"#ffffff",borderColor:"#ffffff",margin:"25px 0px 25px 0px"}} fullWidth={true} variant="outlined" size="large" onClick={() => {window.location.assign("https://twitter.com/KaustavInt28")}}>   Twitter   </Button><br />
            <Button  style={{color:"#ffffff",borderColor:"#ffffff",margin:"25px 0px 25px 0px"}} fullWidth={true} variant="outlined" size="large" onClick={() => {window.location.assign("https://github.com/maxkaustav")}}>   Github   </Button><br />
            <Button  style={{color:"#ffffff",borderColor:"#ffffff",margin:"25px 0px 25px 0px"}} fullWidth={true} variant="outlined" size="large">   Download Resume   </Button><br />
            </Container>
            </Container>
        </div>
    );
}


