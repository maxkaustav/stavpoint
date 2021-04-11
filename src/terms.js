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


export default function Termsc(props){
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
            <Typography align="center" className={classes.typoh}>TERMS AND CONDITION</Typography>
            </Container>
        </div>
        <div id="contribute-to-reads">
        <Container disableGutters="true">
            <Paper elevation={0} className={classes.root2}>
            <div id="back-to-top-anchor2">
            <Typography variant="h2" style={{ padding: "100px 30px 0px 30px "}}>Global terms</Typography>
            </div>
            <div style={{ margin: "0px", padding:"10px 25px 32px 25px", height:"80%",alignContent:"center"}}>
            <Typography className={classes.brk}>No pull request will be accepted for this website as this semi public website.
Future terms and conditions may be changed with a notification when the website is changed in future. 
Represtation state of contributions are determined by the holder of this website, any irrelevant change request will be denied unless it is context error. </Typography>
            </div>
            <div id="back-to-top-anchor2">
            <Typography variant="h2" style={{ padding: "100px 30px 0px 30px "}}>Contribute Code</Typography>
            </div>
            <div style={{ margin: "0px", padding:"10px 25px 32px 25px", height:"80%",alignContent:"center"}}>
            <Typography className={classes.brk}>We don't own any copyright for any code contributions. 
Code will be public through the link of the provided by the contributer. 
We don't feature any code which is not open source. Softwares should be hosted on their website which will be linked through this website. 
When you contribute you automatically agree this terms and conditions.</Typography>
            </div>
            <div id="back-to-top-anchor2">
            <Typography variant="h2" style={{ padding: "60px 30px 0px 30px "}}>Contribute Blogs</Typography>
            </div>
            <div style={{ margin: "0px", padding:"10px 25px 32px 25px", height:"80%",alignContent:"center"}}>
            <Typography className={classes.brk}>All blogs that will be featured here will be private and completeley owned by the contributer. We go through a each blog for screening of abusive contents and we will stop featuring them.
We follow a rule of shared linking which implies that the contributer contributing materials in stavpoint has to feature stavpoint in his material to qualify the conditions of being featued in stavpoint.
This helps us to built partnership for material marketing. Although limited data needs to be shared between the contributer and stavpoint for content ownership.</Typography>
            </div>
            <div id="back-to-top-anchor2">
            <Typography variant="h2" style={{ padding: "60px 30px 0px 30px "}}>Contribute Articles</Typography>
            </div>
            <div style={{ margin: "0px", padding:"10px 25px 32px 25px", height:"80%",alignContent:"center"}}>
            <Typography className={classes.brk}>Contributing articles helps us to feature stories, provided the story is featured or has atleast 10 support points in the website it is featured. Any story shared on e-newspapers will be featured without any concern. 
All article ownership will remain with the contributer.</Typography>
            </div>
            
            </Paper>
        </Container>
        </div>
        </div>
    );
}


