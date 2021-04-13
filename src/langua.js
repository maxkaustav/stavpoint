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
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ButtonBase from '@material-ui/core/ButtonBase';


const userStyle = makeStyles((theme) => ({
    root :props => ({
        display: 'flex',
        flexGrow: 1,
        height: props.heights,
        backgroundColor: "#41004f",
        margin: "0px",
        alignContent:"center",
    }),
    
    typography:{
        
        color:'#ffffff',
        [theme.breakpoints.down(theme.breakpoints.values.xs)]:{
            padding:"40px 20px 0px 0px",
            fontSize: "28px",
        },
        [theme.breakpoints.between(theme.breakpoints.values.xs,"sm")]:{
            padding:"40px 30px 0px 30px",
            fontSize: "35px",
        },
        [theme.breakpoints.between("sm","md")]:{
            padding:"32px 40px 32px 40px",
            fontSize: "60px",
        },
            [theme.breakpoints.between("md","lg")]:{
            padding:"32px 40px 32px 40px",
            fontSize: "60px",
        },
           [theme.breakpoints.up("lg")]:{
            padding:"32px 40px 32px 40px",
            fontSize: "60px",
        }
    },
    gridrule:{
        alignContent:"center",
        padding:"10px",
        [theme.breakpoints.down("sm")]:{
            display: "none"
        },
        [theme.breakpoints.up("sm")]:{
            display: "flex"
        },
        flexWrap: "wrap",
    },
    cardrule:{
        borderRadius:"2%",
        //display:"flex",
        [theme.breakpoints.down(theme.breakpoints.values.xs)]:{
            maxWidth:300,
            maxHeight:"100%",
        },
        [theme.breakpoints.down("sm")]:{
            minWidth:300,
            maxHeight:"100%",
        },
        [theme.breakpoints.between("sm","md")]:{
            minWidth:300,
            minHeight:"70%",
        },
        [theme.breakpoints.between("md","lg")]:{
            minWidth:400,
            minHeight:"100%",
        },
           [theme.breakpoints.up("lg")]:{
            minWidth:400,
            minHeight:"100%",
        }
    },
    catact:{
        /*padding:"10px 5px 10px 230px",*/
    },
    dynamic: {
        display:"flex",
        overflowX:"auto",
        //padding:"10px 30px 10px 10px"
    },
    dyitem:{
        margin:"10px",
        height:"70%",
    },
    mobile:{
        [theme.breakpoints.down("sm")]:{
            display: "flex",
            alignContent: "center"
        },
        [theme.breakpoints.up("sm")]:{
            display: "flex"
        },
    },
    titlec:{
        alignContent:"flex-start",
        [theme.breakpoints.down(theme.breakpoints.values.xs)]:{
            fontSize: "28px",
        },
        [theme.breakpoints.between(theme.breakpoints.values.xs,"sm")]:{
            fontSize: "28px",
        },
        [theme.breakpoints.between("sm","md")]:{
            fontSize: "38px",
        },
            [theme.breakpoints.between("md","lg")]:{
            fontSize: "48px",
        },
           [theme.breakpoints.up("lg")]:{
            fontSize: "48px",
        }
    },
    aboutc:{
        alignContent:"flex-start",
        [theme.breakpoints.down(theme.breakpoints.values.xs)]:{
            fontSize: "18px",
        },
        [theme.breakpoints.between(theme.breakpoints.values.xs,"sm")]:{
            fontSize: "18px",
        },
        [theme.breakpoints.between("sm","md")]:{
            fontSize: "24px",
        },
            [theme.breakpoints.between("md","lg")]:{
            fontSize: "24px",
        },
           [theme.breakpoints.up("lg")]:{
            fontSize: "24px",
        }

    },
    typom2:{
        display:"block",
        //whiteSpace: "nowrap",
        //overflow: "hidden",
        //textOverflow: "ellipsis",
    },

}));
function textvary(text){
    text=text.slice(0,129);
    text=text+"...";
    return text
};

export default function Description(props){
    const props2 = {heights:window.screen.availHeight}
    const classes = userStyle(props2);
    const details = props.dat.card1
    /*document.querySelector("#detecttypes").addEventListener("scroll",()=>{
        console.log("scrolled")
    })*/
 
    return (
        <div className={classes.root}>
        <Container disableGutters={true}>
            <div><Typography align="center" className={classes.typography}>Programming Language Portfolio</Typography></div>
            <div style={{display:"flex",overflowX:"auto" , padding:"32px 0px 0px 0px",height:"70%"}}>
        {details.map((detail)=> (
            <div className={classes.dyitem}>
            <ButtonBase onClick={()=>{window.location.assign(detail.link)}}>
          <Card className={classes.cardrule} raised={true}>
            <CardMedia
            component="img"
            alt="None"
            height="220"
            image={detail.img}
            />
            <CardContent>
                <Typography gutterBottom className={classes.titlec} component="h2">
                {detail.title}
                </Typography>
                <Typography className={classes.aboutc} color="textSecondary">
                {textvary(detail.about)}
                </Typography>
            </CardContent>
            
            </Card>
            </ButtonBase>
            </div>
        ))};
        </div>
        </Container>
        </div>
    );
}