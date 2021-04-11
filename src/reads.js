import { AccordionDetails, Box, ButtonBase, Container, IconButton, Typography } from '@material-ui/core';
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
        backgroundColor: "#ffffff",
        margin: "0px",
        alignContent:"center",
    }),
    typoh:{
        color:'#ec407a',
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
            fontSize: "70px",
        },
    },
    typoq:{
        fontFamily: ['Montez', 'cursive'].join(','),
        padding:"10px 0px 0px 0px",
        [theme.breakpoints.down("sm")]:{
            fontSize: "25px",
        },
        [theme.breakpoints.between("sm","md")]:{
            fontSize: "30px",
        },
            [theme.breakpoints.between("md","lg")]:{
            fontSize: "35px",
        },
           [theme.breakpoints.up("lg")]:{
            fontSize: "40px",
        },
    },
    typoa:{
        fontFamily: ['Montez', 'cursive'].join(','),
        padding:"10px 0px 0px 0px",
        [theme.breakpoints.down("sm")]:{
            fontSize: "18px",
        },
            [theme.breakpoints.between("md","lg")]:{
            fontSize: "20px",
        },
           [theme.breakpoints.up("lg")]:{
            fontSize: "30px",
        },
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
        
        padding:"10px 30px 10px 10px"
    },
    dyitem:{
        margin:"10px",
        height:"80%",
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

}));  
function textvary(text){
    text=text.slice(0,129);
    text=text+"...";
    return text
};

export default function Reading(props){
    const props2 = {heights:window.screen.availHeight}
    const classes = userStyle(props2);
    const quote = props.dat.quote;
    const details = props.dat.card2;
    
    return (
        <div className={classes.root}>
        <Container disableGutters={true}>
            <div><Typography align="center" className={classes.typoh}>Reads</Typography></div>
            <Typography align="center"  className={classes.typoq} >{"' "+quote.statement+" '"}</Typography>
            <Typography align="center" className={classes.typoa} >{quote.by}</Typography>
            <div style={{display:"flex",overflowX:"auto" , padding:"32px 0px 0px 0px"}}>
        {details.map((detail)=> (
            <div className={classes.dyitem}>
            <ButtonBase>
          <Card className={classes.cardrule} raised={true}>
            <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="220"
            image={detail.img}
            />
            <CardContent>
                <Typography gutterBottom className={classes.titlec} component="h2">
                {detail.title}
                </Typography>
                <Typography className={classes.aboutc} color="textSecondary" component="p">
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


