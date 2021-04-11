import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
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
import {BrowserRouter, Link as RouterLink, Route, Switch} from "react-router-dom";


export default function Body(props){
    const whole =props.data;
    const control = props.control;
    return (
        <div>
        <div id="image_">
          <Infoimg arow={control} />
        </div>
      <div id="description_about_me">
        <Description dat={whole} />
      </div>
      <div id="skills">
      <Description2 dat={whole} />
      </div>
      <div id="reads">
        <Reading dat={whole} />
      </div>
      <div id="contacts">
        <Contacts />
      </div>
      </div>
    );
  };
  