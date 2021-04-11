import './App.css';
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import tf from './tensorflow.jpg';
import ag from './angular.png';
import cs from './cssimg.png';
import htmli from './htmlillustration.png';
import jv from './java.jpg';
import jsi from './jsimg.png';
import Kube from './Kubernetes_AIM.jpg';
import py from './python.jpeg';
import pyd from './pythondjango.png';
import rec from './rc.png';
import ci from "./cim.png";
import doc from "./dockerjp.png";
import Appcontrol from "./Appcontrol";


class App extends React.Component 
{  
  state={
    collapsearrow: false,
    card1:[
      {img: tf, title:"Tensorflow",link:"",about:"TensorFlow is a free and open-source software library for machine learning,deep learning and AI which is maintained by google"},
      {img: htmli, title:"Html",about:"The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript."},
      {img: cs, title:"Css",about:"Cascading Style Sheets is a style sheet language used for describing the presentation of a Html"},
      {img: jsi, title:"Javascript",about:"JavaScript is a programming language that conforms to the ECMAScript specification"},
      {img: jv, title:"Java",about:"Java is a class-based, object-oriented programming language"},
      {img: py, title:"Python",about:"Python is an interpreted, high-level and general-purpose programming language"},
      {img: rec, title:"React",about:"React is an open-source, front end, JavaScript library for UI components"},
      {img: ci, title:"C",about:"C is a general-purpose, procedural computer programming language supporting structured programming"},
      {img: ag, title:"Angular",about:"Angular is a TypeScript-based open-source web application framework"},
      {img: pyd, title:"Django",about:"Django is a Python-based web framework that follows the model-template-views pattern"},
      {img: doc, title:"Docker",about:"Docker is a set of platform as a service products that use OS-level virtualization"},
      {img: Kube, title:"Kubernetes",about:"Kubernetes is a container-orchestration system for automating computer application deployment"},
    ],
    card2:[
      {img: tf, title:"Tensorflow",about:"TensorFlow is a free and open-source ."},
      {img: tf, title:"Tensorflow",about:"TensorFlow is a free and open-source software library for machine learning."},
      {img: tf, title:"Tensorflow",about:"TensorFlow is a free and open-source software library for machine learning."},
      {img: tf, title:"Tensorflow",about:"TensorFlow is a free and open-source software library for machine learning."},
      {img: tf, title:"Tensorflow",about:"TensorFlow is a free and open-source software library for machine learning."},
      {img: tf, title:"Tensorflow",about:"TensorFlow is a free and open-source software library for machine learning."},
      {img: tf, title:"Tensorflow",about:"TensorFlow is a free and open-source software library for machine learning."},
      {img: tf, title:"Tensorflow",about:"TensorFlow is a free and open-source software library for machine learning."},
      {img: tf, title:"Tensorflow",about:"TensorFlow is a free and open-source software library for machine learning."},
      {img: tf, title:"Tensorflow",about:"TensorFlow is a free and open-source software library for machine learning."},
      {img: tf, title:"Tensorflow",about:"TensorFlow is a free and open-source software library for machine learning."},
      {img: tf, title:"Tensorflow",about:"TensorFlow is a free and open-source software library for machine learning."},
    ],
    quote: {statement:"There is more treasure in books than in all the pirate's loot on Treasure Island",
            by:"–Walt Disney"},
    email: {},
  };
  changearea =(a) =>{
    this.setState({
      collapsearrow: a
    });
  }
  render(){
    return(
      <div>
        <Appcontrol data={this.state} control={this.changearea} />
      </div>
      )
  };

}

export default App;
