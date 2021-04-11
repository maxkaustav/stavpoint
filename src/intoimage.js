import { Box, Container, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import { render } from 'react-dom';
import Des from './describe.jpg';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Fab from '@material-ui/core/Fab';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Collapse from '@material-ui/core/Collapse';
import Fade from '@material-ui/core/Fade';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';

const userStyle = makeStyles((theme) => ({
    root :props => ({
        display: 'flex',
        height: props.heights-68,
    }),
    root2: {
        position: 'fixed',
        right: "50%",
        left: "50%",
        align:"center",
        bottom: theme.spacing(5),
        color: '#ffffff'
        
      },
    root3:{
        align:"center"
    },
    bgimage: {
        width: "100%",
        height : "100%",
        backgroundImage:`url(${'https://media.giphy.com/media/9MJ65OWvrNIXnOiNEk/giphy.gif'})`,
        backgroundRepeat:"no-repeat",
        [theme.breakpoints.down("md")]:{
            backgroundSize:"100% 100%",
        },
        [theme.breakpoints.up("md")]:{
            backgroundSize:"100%",
        }
    },
    hovertxt: {
        flexWrap: "wrap",
        color: "#ffffff",
        marginTop: theme.spacing(10),
        top : theme.spacing(50),
        [theme.breakpoints.down("md")]:{
            fontSize: "50px",
        },
        [theme.breakpoints.up("md")]:{
            fontSize: "100px",
        }
    },
    hovertxtsubtitle: {
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

}));
function HideOnScroll(props) {
    const { children, window } = props;
  
    const trigger = useScrollTrigger({ target: window ? window() : undefined, disableHysteresis: true,
        threshold: 100, });
  
    return (
    <Fade in={!trigger}>
        {children}
    </Fade>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };
export default function Infoimg(props){
    const cg = props.arow
    const props2 = {heights:window.screen.availHeight}
    const classes = userStyle(props2);
    const [checked, setChecked] = React.useState(true);

    const handleChange = () => {
        setChecked((prev) => !prev);
        cg(true);
    }
    return (
        <div className={classes.root}>
            <Box  className={classes.bgimage} elevation={0} >
            <Typography align="center" className={classes.hovertxt}> <b>Welcome to StavPoint</b></Typography>
            <Typography align="center" className={classes.hovertxtsubtitle}> <i>Official blog website of Kaustav Chaudhury. Lets Explore the world and open unseen locks.</i></Typography>
                <HideOnScroll {...props}>
                <Fade in={checked}>
                <IconButton onClick={handleChange}>
                <div className={classes.root3}>
                <ArrowDownwardIcon className={classes.root2} fontSize="large"/>
                </div>
                </IconButton>
                </Fade>
                </HideOnScroll>
            </Box>
            
        </div>
    );
}