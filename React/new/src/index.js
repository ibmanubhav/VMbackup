import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './Header';
import MyApp from './MyApp';
import Footer from './Footer';
import App from './App';


// class Bike extends React.Component{
//   constructor(){
//     super();
//     this.state = {speed:"100kmph"};
//   }
//   render(){
//   return <h1>This is Bike {this.state.speed}</h1>;
//   }
// }
//===========================================================

// class Car extends React.Component{
//   constructor(){
//     super();
//     this.state = { colour: "BLUE" };
//   }
//   render(){
//   return <p>I AM {this.state.colour} CAR</p>
//   }
// }

//===========================================================

// class App1 extends React.Component {
//   render() {
//     return <h1> I am in {this.props.brand}</h1>
//   }
// }

// const Myelement = <App1 brand="IBM" />;

//==========================================================
// Prop in function

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
// const element = <Welcome name="Sara" />;

//============================================================
// props using constructor

// class Data extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <h1>Here I am at {this.props.place}</h1>
//   }
// }
// ReactDOM.render(<Data place='Mumbai' />, document.getElementById('root'));

//=============================================================

// class MyApp1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fruit: "Apple",
//       color: "Red",
//     };
//   }

//   render() {
//     return (<div>
//       <p>the fruit is {this.state.fruit}</p>
//       <p>the colour of fruit is {this.state.color}</p>
//     </div>
//     );
//   }
// }

//=============================================================

// class MyApp2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       fruit: "Apple",
//       color: "Red",
//     }
//   }
//   colourChange() {
//     this.setState({ color: "green" });
//   }

//   render() {
//     return (<div>
//       <p>the fruit is {this.state.fruit}</p>
//       <p>the colour of fruit is {this.state.color}</p>
//       <p><button onClick={this.colourChange}>Change Colour</button>{this.onClick}</p>
//     </div>
//     );
//   }
// }

//==========================================================
//Lifcycle
// class MyHeader extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = { favbook: "As u like it" }
//   }

  // static getDerievedStateFromProps(props, state) {  //whenever coponent receives update
  //   return { favbook: props.favcol };
  // }

  // componentDidMount(){
  //   setTimeout(()=>
  //   {
  //     this.setState({favbook:"ABC"})
  //   },5000)
  // }

  // shouldComponentUpdate() { // verify default value is true
  //   return true;
  // }
  // changebook = () => {
  //   this.setState({ favbook: "ABC" });
  // }

//   getSnapshotBeforeUpdate(prevProps, prevState){
//     document.getElementById("div1").innerHTML="Intial Book" + prevState.favbook;
//   }

//   componentDidUpdate(){
//     document.getElementById("div2").innerHTML="updated book"+ this.state.favbook;
//   }

//   render() {
//     return (
//       <div>
//         <h1>My FAV book is {this.state.favbook}</h1>
//         <button type="button" onClick={this, this.changebook}>Changebook</button>
//         <div id="div1"></div>
//         <div id="div2"></div>
//       </div>
//     )
//   }
// }

//=========================================================
 
// class Container extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {show: true};
//   }
//   delHeader = () => {
//     this.setState({show: false});
//   }
//   render() {
//     let myheader;
//     if (this.state.show) {
//       myheader = <Child />;
//     };
//     return (
//       <div>
//       {myheader}
//       <button type="button" onClick={this.delHeader}>Delete Header</button>
//       </div>
//     );
//   }
// }

// class Child extends React.Component {
//   componentWillUnmount() {
//     alert("The Header will be unmounted.");
//   }
//   render() {
//     return (
//       <h1>Delete this Header</h1>
//     );
//   }
// }

//=========================================================

// class App3 extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {name: ""};
//   }

//   handleInput = event => {
//     this.setState({ name: event.target.value });
//   };

//   printText = () => {
//     console.log(this.state.name);
//     document.getElementById('inp').innerHTML=this.state.name;
//     };

//   render() {
//     return (
//       <div>
//         <h1>Hello</h1>
//         <header id='inp'></header>
//         <input onChange={this.handleInput} placeholder="Enter text" />
//         <br></br>
//         <button onClick={this.printText}>Button</button>
//         <button onClick ={this.clearText}>Clear</button>
//       </div>
//     );
//   }
// }

//==============================================================

// class App3 extends React.Component{

//   state = {
//      isActive:false
//   }

//   showText = ()=>{
//       this.setState({isActive: true})
//   }

//   hideText = () =>{
//       this.setState({isActive: false})
//   }

//    render(){
//        return(
//            <div>
//            {this.state.isActive ? <h1>Hello</h1> : null }
//              <button onClick={this.showText}>Show</button>
//              <button onClick={this.hideText}>Hide</button>
//            </div>
//        )
//    }
// }

//======================================================

// function Validation() {

//   const [agree, setAgree] = useState(false);

//   const checkboxHandler = () => {
//     setAgree(!agree);
//   }

//   return (
//     <form>
//       <h2>Handle Form in React</h2>
//       <input placeholder="Enter name" required />
//       <br></br>
//       <input type="checkbox" id="agree" onChange={checkboxHandler} />
//       <label htmlFor="agree"> accept terms and conditions</label><br></br>
//       <button disabled={!agree} className="btn">
//         Submit
//         </button>
//     </form>
//   )
// }

//========================================================

function Data(){
 
  return(
    <div>
    <h1>My Bank</h1>
    <a href="this.Data1"></a>
    </div>
  )
}
ReactDOM.render(<Data />, document.getElementById('root'))