import React from "react";
import "./sign-in.style.scss"
import Forminput from "../form-input/form-input.component";
import Buttonitem from "../button/button.component";
import {google} from "../../firebase/configuration";


class SignIn extends React.Component{
    constructor(){
        super();

        this.state={
            email:"",
            password:""
        }
    }
    handelChange=event=>{
       const {name,value}=event.target
        this.setState({
            [name]:value
        })
    }
    handelSubmit=event=>{
        event.preventDefault();
        this.setState({
            email :"",password:""
        })
    }
    render(){
        return(
            
                <form className="sign-in">
                    <div className="title"><h1>I already have an account</h1></div>
                    <Forminput name="email"  value={this.state.email}  type="email" handelChange={this.handelChange} label="email" />
                    
                    <Forminput name="password"  value={this.state.password} type="password" handelChange={this.handelChange} label="password" />

                    
                    <div className="buttons">
                    
                    <Buttonitem type="Submit" onClick={this.handelSubmit} >Submit</Buttonitem>
                    <Buttonitem onClick={google}>Sign in with google</Buttonitem>
                   </div>                                     
                </form>

        
        )
    }
    
}
export default SignIn;