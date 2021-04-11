import { Box, Container, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import { render } from 'react-dom';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Fab from '@material-ui/core/Fab';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Collapse from '@material-ui/core/Collapse';
import Fade from '@material-ui/core/Fade';



const userStyle = makeStyles((theme) => ({
    root :props => ({
        display: 'flex',
        height: props.heights-5,
    }),
    root2: {
        justifyContent: "center",
        flexWrap: 'wrap',
        height: "85%",
        margin: theme.spacing(4),
        '& > *': {
            margin: theme.spacing(4),
            height: theme.spacing(16),
          },
      },
    helow: {
       margin: "32px 32px 0px 32px",
       padding: "32px 32px 0px 32px",
       height: "20%"
        
    },
    typography:{
        fontFamily: ['Lobster', 'cursive'].join(','),
        color:'#ec407a',
        [theme.breakpoints.down("sm")]:{
            fontSize: "70px",
        },
            [theme.breakpoints.between("sm","md")]:{
            fontSize: "90px",
        },
           [theme.breakpoints.up("md")]:{
            fontSize: "100px",
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

export default function Description(props){
    const props2 = {heights:window.screen.availHeight}
    const classes = userStyle(props2);
    const data = props.collapsearrow;
    const anchor = (document).querySelector('#back-to-top-anchor2');
  
    if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    return (
        <div className={classes.root}>
            <Container disableGutters="true">
            <Paper elevation={15} className={classes.root2}>
            <div className={classes.helow} id="back-to-top-anchor2">
            <Typography align="center" className={classes.typography}>Hello,</Typography>
            </div>
            <div style={{ margin: "0px", padding:"10px 32px 32px 32px", height:"80%",alignContent:"center"}}>
            <Typography align="center" className={classes.brk}>I am Kaustav Chaudhury. I am currently studying in college. You will be able to know me better soon. When you will look here you will find exciting information about healthcare, technology, finance and many more. Reading them will help one to take important decision in life and prevent's one to avoid pitfalls in their work or life. Learning from wrong decision is the best way of learning. So keep looking.</Typography>
            <Typography align="center" className={classes.brk}>Thank you</Typography>
            </div>
            </Paper>
            </Container>
        </div>
    );
}