import React from 'react';
import Homepage from "./Pages/homepage.component"
import { Route, Switch, Link} from "react-router-dom"
import './App.css';
import Shoppage from "./Pages/shoppage.component"
import Signpage from './Pages/sign-in-and-up.component';
import firebase from "./firebase/configuration";
import {Setuser} from "./redux/user-actions";
import {connect} from "react-redux";
import Buttonitem from './Components/button/button.component';
import Header from "./Components/header.component";




class App extends React.Component {
 
  componentDidMount(){
   firebase.auth().onAuthStateChanged(user=>{this.props.Setuser(user) });
   
  }
  render(){
  return (
    <div className="App">
      <Header/>
     <Switch>
        <Route exact component={Homepage} path="/"/>
        <Route exact component={Shoppage} path="/shop"/>
        <Route exact component={Signpage} path="/sign"/>
        </Switch>
    </div>
  );}
}
const dispatchStateToPros=dispatch=>({
  Setuser :user=>dispatch(Setuser(user))

});


export default connect(null,dispatchStateToPros)(App);
