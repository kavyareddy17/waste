import React, { Component } from 'react';
import Header from '../Common/Header/Header';
import Name from '../Common/Name/Name';
import Skills from '../Common/Skills/Skills';
import './Interviewer.css';
import Toall from '../Common/Toall/Toall';
class Interviewer extends Component {
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
    onSubmit() {
        console.log('Submitted');}
     render() {
        return (
            <div>
                <div class="container">
                <center><h3>Interviewer Registration</h3></center>
                <Header />
                <div class="main-container" id="main-con">
                    <form>
                        <Name updateFormStatus={this.updateFormStatus}
                        updateFormState={this.updateFormState}/>
                       <Toall updateFormStatus={this.updateFormStatus}
                        updateFormState={this.updateFormState}/>
                       <Skills updateFormStatus={this.updateFormStatus}
                        updateFormState={this.updateFormState}/>
                        <div class="form-group row">
                            <center>
                           <span> <button type="rest" class="btn btn-primary" id="b1">Clear</button></span>
                           <span>  <button type="button" class="btn btn-primary" id="b2">Register</button></span>
                            </center>
                        </div>
                    </form>
                </div>
            </div>


            </div>
        );
    }
}

export default Interviewer;