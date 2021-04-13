import { makeStyles } from '@material-ui/core/styles';
import React, {useEffect, Fragment } from 'react';
import Infoimg from './intoimage';
import Description from './descrption.js';
import Description2 from './langua.js';
import Reading from "./reads.js";
import Contacts from "./contact.js";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import Slide from '@material-ui/core/Slide';
import { AccordionDetails, IconButton } from '@material-ui/core';
import { render } from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {BrowserRouter, Link as RouterLink, Route, Switch,Redirect} from "react-router-dom";
import Body from "./home.js";
import Sv from "./softwarevault.js";
import Contrib from "./contribute.js";
import Terms from "./terms.js";
import Privacy from "./privacy.js";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      height: 70,
  },
    root2: {
      position: 'fixed',
      bottom: theme.spacing(5),
      right: theme.spacing(5),
    },
    root3:{
        height:"100px",
        backgroundColor:"#000000"
    },
    menuicon:{
        color:"#ffffff"
    },
    title: {
      marginLeft: theme.spacing(0),
      flexGrow: 1,
    },
    customHeight: {
      minHeight: 70,
    },
    typography: {
        fontFamily: ['Yellowtail', 'cursive'].join(','),
        fontSize: 55,
    },
    displying:{
        [theme.breakpoints.down("sm")]:{
            display: "block",
            //alignContent: "center"
        },
        [theme.breakpoints.up("sm")]:{
            display: "none"
        },
    },
    displying2:{
        [theme.breakpoints.down("sm")]:{
            display: "none",
            //alignContent: "center"
        },
        [theme.breakpoints.up("sm")]:{
            display: "flex"
        },
    }
  }));
  function HideOnScroll(props) {
    const { children, window } = props;
  
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };
  function ScrollTop(props) {
      const { children, window } = props;
      const classes = useStyles();
      const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
      });
    
      const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    
        if (anchor) {
          anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      };
    
      return (
        <Zoom in={trigger}>
          <div onClick={handleClick} role="presentation" className={classes.root2}>
            {children}
          </div>
        </Zoom>
      );
    }
    
    ScrollTop.propTypes = {
      children: PropTypes.element.isRequired,
      window: PropTypes.func,
    };

function Appcontrol(props) {
    const whole =props.data;
    const control = props.control;
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    return (
        <div>
        <div className={classes.root} id="back-to-top-anchor">
    <Container disableGutters="true">
    <HideOnScroll {...props}>
      <AppBar className={classes.customHeight}>
          <Toolbar>
            <Typography variant="h4" className={classes.title}>
            <Link component="button" className={classes.typography} color="inherit" underline="none" variant ="h4" onClick={() => { window.location.reload();}}>
            StavPoint
            </Link>
            </Typography>
            <div className={classes.displying}>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
            <MoreVertIcon size="large" className={classes.menuicon}/>
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
            <MenuItem onClick={handleClose} component={RouterLink} to="/contribute">CONTIBUTE</MenuItem>
            <MenuItem onClick={() => {window.location.assign("https://github.com/maxkaustav")}}>PROJECTS</MenuItem>
            <MenuItem onClick={handleClose} component={RouterLink} to="/home">HOME</MenuItem>
            </Menu>
            </div>
            <div className={classes.displying2}>
            <Button color="inherit" variant="text" size="large" component={RouterLink} to="/home">   Home   </Button>
            <Button color="inherit" variant="text" size="large" component={RouterLink} to="/contribute">   Contribute   </Button>
            <Button color="inherit" variant="text" size="large" onClick={() => {window.location.assign("https://github.com/maxkaustav")}}>   Projects   </Button>
            </div>
          </Toolbar>
        </AppBar>
        </HideOnScroll>
        </Container>
        <ScrollTop {...props}>
        <Fab color="secondary" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
        </div>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" render={() =>(<Body data={whole} control={control} />)}></Route>
        <Route path="/contribute" render={() =>(<Contrib/>)}></Route>
        <Route path="/projects" render={() =>{window.location.assign("https://github.com/maxkaustav")}}></Route>
        <Route path="/tc" render={() =>(<Terms action={true} />)}></Route>
        <Route path="/pp" render={() =>(<Privacy action={true}/>)}></Route>
        <div className={classes.root3}>
            <Container align="center" style={{padding: "30px"}}>
            <Link component={RouterLink} to="/tc" color="#ffffff" underline="none" style={{padding:"0px 50px 0px 0px", color:"#ffffff"}}>
                Terms and Conditions
            </Link>
            <Link component={RouterLink} to="/pp" style={{color:"#ffffff"}} underline="none" >
                Privacy Policy
            </Link>
            </Container>
        </div>
      </div>
    );
  }
  
  export default Appcontrol;