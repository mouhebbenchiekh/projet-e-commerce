import React from "react"
import Buttonitem from "./button/button.component"
import {connect} from "react-redux";
import firebase from "../firebase/configuration";
import {Link} from "react-router-dom";

function Header({currentUser}){
    return(
            <div className="header">
            {currentUser?(<Buttonitem onClick={()=>firebase.auth().signOut()}>sign out</Buttonitem>):(<Link to="/sign"><Buttonitem>Sign in</Buttonitem></Link>)}
            </div>
    );
}
const mapStateToProps =state=> ({
    currentUser :state.user.currentUser
   });

   export default connect(mapStateToProps)(Header)