import './App.css';
import React from 'react';
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
import Csharp from './csh.jpg';
import Net from './n.png';
import Xam from './xa.png';
import R1 from './r1.png';
import R2 from './r2.png';
import R3 from './r3.jpeg';
import R4 from './r4.jpeg';
import R5 from './r5.png';
import R6 from './r6.png';
import R7 from './r7.jpeg';

class App extends React.Component 
{  
  state={
    collapsearrow: false,
    card1:[
      {img: tf, title:"Tensorflow",link:"https://www.tensorflow.org/",about:"TensorFlow is a free and open-source software library for machine learning,deep learning and AI which is maintained by google"},
      {img: htmli, title:"Html",link:"https://html.com/",about:"The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript."},
      {img: cs, title:"Css",link:"https://www.w3schools.com/css/",about:"Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."},
      {img: jsi, title:"Javascript",link:"https://www.javascript.com/",about:"JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions."},
      {img: jv, title:"Java",link:"https://www.java.com/en/",about:"Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere (WORA),[16] meaning that compiled Java code can run on all platforms that support Java without the need for recompilation"},
      {img: py, title:"Python",link:"https://www.python.org/",about:"Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation."},
      {img: rec, title:"React",link:"https://reactjs.org/",about:"React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."},
      {img: ci, title:"C",link:"https://en.wikipedia.org/wiki/C_(programming_language)",about:"C is a general-purpose, computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions."},
      {img: ag, title:"Angular",link:"https://angular.io/",about:"Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS."},
      {img: pyd, title:"Django",link:"https://www.djangoproject.com/",about:"Django is a Python-based free and open-source web framework that follows the model-template-views architectural pattern. It is maintained by the Django Software Foundation, an American independent organization established as a 501 non-profit."},
      {img: doc, title:"Docker",link:"https://www.docker.com/",about:"Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels."},
      {img: Kube, title:"Kubernetes",link:"https://kubernetes.io/",about:"Kubernetes is an open-source container-orchestration system for automating computer application deployment, scaling, and management. It was originally designed by Google and is now maintained by the Cloud Native Computing Foundation."},
      {img: Csharp, title:"C#",link:"https://docs.microsoft.com/en-us/dotnet/csharp/",about:"C# is a general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines."},
      {img: Net, title:".NET",link:"https://dotnet.microsoft.com/",about:"The .NET Framework is a software framework developed by Microsoft that runs primarily on Microsoft Windows. It includes a large class library called Framework Class Library and provides language interoperability across several programming languages."},
      {img: Xam, title:"Xamarin",link:"https://dotnet.microsoft.com/apps/xamarin",about:"Xamarin is a Microsoft-owned San Francisco-based software company founded in May 2011 by the engineers that created Mono, Xamarin.Android and Xamarin.iOS, which are cross-platform implementations of the Common Language Infrastructure and Common Language Specifications."},
    ],
    card2:[
      {img: R1, title:"TFP",link:"https://medium.com/tensorflow/an-introduction-to-probabilistic-programming-now-available-in-tensorflow-probability-6dcc003ca29e", about:"New to TensorFlow Probability (TFP)? Then we’ve got something for you. Bayesian Methods for Hackers, an introductory, hands-on tutorial, is now available with examples in TFP. Available as an open-source resource for all, the TFP version complements the previous one written in PyMC3."},
      {img: R2, title:"RAPIDS",link:"https://towardsdatascience.com/nlp-with-rapids-yes-its-possible-1830287210ed",about:"The specificity of this work is, first, that I have performed it end-to-end on GPU with RAPIDS, whose libraries cuPY, cuDF and cuML enable you to reproduce every Numpy, Pandas or Scikit-Learn manipulation on GPU; and second, that I try to extract information on a numerical target (the ultimate claim cost) based only on text data (description of the injury)."},
      {img: R3, title:"Workhlth",link:"https://medium.com/invisible-illness/my-incredible-experience-talking-about-mental-health-at-work-a280ccb41e47",about:"My Incredible Experience Talking About Mental Health At Work."},
      {img: R4, title:"Self>$",link:"https://medium.com/swlh/invest-your-time-before-you-invest-your-money-1d3d8c9f977",about:"Invest Your Time Before You Invest Your Money. The art of Self investment"},
      {img: R5, title:"Pandemic CA",link:"https://paffairs.medium.com/cal-state-la-launches-pandemic-diaries-digital-history-project-268e50e21d27",about:"While navigating through the coronavirus pandemic since March 2020, the Cal State LA community has been adapting to a new normal of online learning, teleworking, social distancing and sheltering in place."},
      {img: R6, title:"Stock hack",link:"https://thepowerofknowledge.xyz/secrets-of-peter-lynch-to-make-money-with-stocks-e5be660279ad",about:"Secrets of Peter Lynch To Make Money With Stocks. Build your portfolio today."},
      {img: R7, title:"CovidId",link:"https://medium.com/fast-company/designing-for-uncertainty-how-ibm-created-a-vaccine-passport-30265ca7bc0d",about:"Designing for Uncertainty: How IBM Created a Vaccine Passport. COVID-19 passports are imperfect solutions to a massive problem. And yes, the people building them are very aware."},
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
