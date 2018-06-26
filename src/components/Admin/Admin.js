import React, { Component } from 'react';
import Header from '../Common/Header/Header';
import Toall from '../Common/Toall/Toall';
import Location from '../Common/Location/Location';
import $ from 'jquery';
import Name from '../Common/Name/Name';
import './Admin.css'
//import 'jquery/jquery-3.3.1.min.js'
// window.jQuery = $;
// window.$ = $;
// global.jQuery = $;
class Admin extends Component {
    constructor() {
        super();
        this.state = {
            isFormValid: false,
            Name: '',
            

     };
        this.updateFormStatus = this.updateFormStatus.bind(this);
        this.updateFormState = this.updateFormState.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      
       
    }

    updateFormState(key, val) {
        this.setState({
            [key]: val
        });
    }

    updateFormStatus(formStatus) {
        this.setState({
            isFormValid: formStatus
        })
    }
    // onClear(){
    //     this.setState({
    //         NameValue : '',
    //         EmailValue : '',
    //         PasswordValue : '',
    //         NumberValue: '',
    //     });

    // }
    // handleInput2Change(event) {
    //     this.setState({
    //       Name: event.target.value
    //     });
    //   }
    onSubmit() {
        console.log('Submitted');}
     render() {
                return (
            <div>
                <div class="container">
                <center><h3>Admin Registration</h3></center>
                <Header />
                <div class="main-container" id="main-con">
                    <form>
                        <Name   updateFormStatus={this.updateFormStatus}
                        updateFormState={this.updateFormState}/>
                       <Toall   updateFormStatus={this.updateFormStatus}
                        updateFormState={this.updateFormState}/>
                    
                       <Location updateFormStatus={this.updateFormStatus}
                        updateFormState={this.updateFormState}/>
                       <br></br>
                        <div class="form-group row">
                            <center>
                           <span> <button type="reset" class="btn btn-primary" id="b1" >Clear</button></span>
                           <span>  <button  type="button" class="btn btn-primary" id="b2" onClick={this.onSubmit}
                        disabled={!this.state.isFormValid}>Register</button></span>
                            </center>
                        </div>
                    </form>
                </div>
            </div>


            </div>
        );
    }
}

export default Admin;