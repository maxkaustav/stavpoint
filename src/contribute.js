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


export default function Contrib(props){
    const props2 = {heights:window.screen.availHeight}
    const classes = userStyle(props2);
 
    return (
        <div>
        <div className={classes.root}>
            <Container disableGutters={true}>
            <Typography align="center" className={classes.typoh}>CONTRIBUTE</Typography>
            <Typography align="center" className={classes.typo2}> <i>Contribute to projects and Colaborate with us</i></Typography>
            </Container>
        </div>
        <div id="contribute-to-reads">
        <Container disableGutters="true">
            <Paper elevation={0} className={classes.root2}>
            <div id="back-to-top-anchor2">
            <Typography variant="h2" style={{ padding: "100px 30px 0px 30px "}}>Contribute Code</Typography>
            </div>
            <div style={{ margin: "0px", padding:"10px 25px 32px 25px", height:"80%",alignContent:"center"}}>
            <Typography className={classes.brk}>Contribute your work and show them to everyone. Code or softwares can be contributed using a mail in this website with <b>Subject-Contribute to code</b> containing open-source code link and the description about what it does. A better way for code or software contribution is by writing an article about it. No softwares are hosted in this platform.</Typography>
            </div>
            <div id="back-to-top-anchor2">
            <Typography variant="h2" style={{ padding: "60px 30px 0px 30px "}}>Contribute Blogs</Typography>
            </div>
            <div style={{ margin: "0px", padding:"10px 25px 32px 25px", height:"80%",alignContent:"center"}}>
            <Typography className={classes.brk}>Market your website or blog to gain traffic. Website or blogging sites can be contributed using a mail in this website with <b>Subject-Market Websites</b> containing website link and the description about what it is about. One can also add a description about its top grossing article.</Typography>
            </div>
            <div id="back-to-top-anchor2">
            <Typography variant="h2" style={{ padding: "60px 30px 0px 30px "}}>Contribute Articles</Typography>
            </div>
            <div style={{ margin: "0px", padding:"10px 25px 32px 25px", height:"80%",alignContent:"center"}}>
            <Typography className={classes.brk}>Contribute your articles to spread knowledge. Articles can be featured using a mail in this website with <b>Subject-Contribute Articles</b> containing article link and the description about what it is about. Articles can can be about anything. Diverse articles can help readers to converge new ideas or to find more ways to solve global problems.
            Articles help people to clear doubts and make a clear vision for their life.</Typography>
            </div>
            <div className id="back-to-top-anchor2">
            <Typography variant="h4" color="error" style={{ padding: "30px 30px 30px 30px "}}>Read the terms & condition and privacy policy before contributing</Typography>
            </div>
            </Paper>
        </Container>
        </div>
        </div>
    );
}


