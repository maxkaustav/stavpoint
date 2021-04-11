import { Container, Typography } from '@material-ui/core';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const userStyle = makeStyles((theme) => ({
    root :props => ({
        display: 'flex',
        flexGrow: 1,
        height: props.heights-20,
        backgroundColor: "#000000",
        margin: "0px",
        alignContent:"center",
        backgroundImage: `linear-gradient(180deg,rgb(156, 39, 176), rgb(236, 64, 122))`,
        backgroundSize:"100% 100%",
        backgroundRepeat:"no-repeat"
    }),
    typoh:{
        color:'#ffffff',
        padding:"150px 0px 0px 0px",
        [theme.breakpoints.down("sm")]:{
            fontSize: "40px",
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
    typo2:{
        flexWrap: "wrap",
        color: "#ffffff",
        marginTop: theme.spacing(2),
        [theme.breakpoints.down("sm")]:{
            fontSize: "25px",
        },
        [theme.breakpoints.up("md")]:{
            fontSize: "25px",
        }
    },
    brk: props =>({
        [theme.breakpoints.down("sm")]:{
            fontSize: "16px",
        },
        [theme.breakpoints.between("sm","md")]:{
            fontSize: "25px",
        },
        [theme.breakpoints.up("md")]:{
            padding:"10px 64px 32px 64px",
            fontSize: "30px",
        },
        [theme.breakpoints.up("lg")]:{
            padding: "32px 32px 32px 32px",
            fontSize: "30px",
        }
    }),
    
}));  


export default function Privacy(props){
    const props2 = {heights:window.screen.availHeight}
    const classes = userStyle(props2);
    let val= props.action;
    if (val){
        window.scrollTo(0,0);
        val = false;
    }
 
    return (
        <div>
        <div className={classes.root}>
            <Container disableGutters={true}>
            <Typography align="center" className={classes.typoh}>PRIVACY POLICY</Typography>
            </Container>
        </div>
        <div id="contribute-to-reads">
        <Container disableGutters="true">
            <Paper elevation={0} className={classes.root2}>
            <div id="back-to-top-anchor2">
            <Typography variant="h2" style={{ padding: "100px 30px 0px 30px "}}>Rules and Regulations</Typography>
            </div>
            <div style={{ margin: "0px", padding:"10px 25px 32px 25px", height:"80%",alignContent:"center"}}>
            <Typography className={classes.brk}>In the world of digital advancement privacy is a big question. We are glad to report that this wesite is safe to explore and a place where you can look freely.</Typography>
            </div>
            <div id="back-to-top-anchor2">
            <Typography variant="h2" style={{ padding: "60px 30px 0px 30px "}}>Our policies</Typography>
            </div>
            <ul>
                <li><div style={{ margin: "0px", padding:"10px 25px 32px 25px", height:"80%",alignContent:"center"}}>
            <Typography className={classes.brk}>We respect the privacy of the viewers and users of our product.</Typography>
            </div>
                </li>
                <li><div style={{ margin: "0px", padding:"10px 25px 32px 25px", height:"80%",alignContent:"center"}}>
            <Typography className={classes.brk}>We do not collect any kind of data for better user experience.</Typography>
            </div>
                </li>
                <li><div style={{ margin: "0px", padding:"10px 25px 32px 25px", height:"80%",alignContent:"center"}}>
            <Typography className={classes.brk}>We do not accept any personalised ads based on any data.</Typography>
            </div>
                </li>
                <li><div style={{ margin: "0px", padding:"10px 25px 32px 25px", height:"80%",alignContent:"center"}}>
            <Typography className={classes.brk}>We do not collect users personal data.</Typography>
            </div>
                </li>
                <li><div style={{ margin: "0px", padding:"10px 25px 32px 25px", height:"80%",alignContent:"center"}}>
            <Typography className={classes.brk}>We do not collaborate with third parties to collect user data.</Typography>
            </div>
                </li>
                <li><div style={{ margin: "0px", padding:"10px 25px 32px 25px", height:"80%",alignContent:"center"}}>
            <Typography className={classes.brk}>We do not monetize any of our content.</Typography>
            </div>
                </li>
            </ul>
            
            </Paper>
        </Container>
        </div>
        </div>
    );
}


