import React, { Component } from 'react';
import Header from '../Common/Header/Header';
import './Drive.css';
import Name from '../Common/Name/Name';
import Location from '../Common/Location/Location';
import Skills from '../Common/Skills/Skills';
class Drive extends Component {
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
            <div class="container">
                <center><h3>Drive Registration</h3></center>
                <Header />
               
                <div class="main-container" id="main-con">
                    <form>
                        <Name updateFormStatus={this.updateFormStatus}
                        updateFormState={this.updateFormState}/>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Date</label>
                            <div class="col-sm-10">
                                <input type="date" id="date" name="date" /><span class="glyphicon glyphicon-calendar"></span>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Start Time</label>
                            <div class="col-sm-10">
                                <input type="time" name="start_time" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">End Time</label>
                            <div class="col-sm-10">
                                <input type="time" name="end_time" />
                            </div>
                        </div>
                        <Location updateFormStatus={this.updateFormStatus}
                        updateFormState={this.updateFormState} />
                        <Skills updateFormStatus={this.updateFormStatus}
                        updateFormState={this.updateFormState} />
                       <br/> <br/>
                        <div class="form-group row">
                            <center>
                           <span> <button type="reset" class="btn btn-primary" id="b1">Reset</button></span>
                           <span>  <button type="button" class="btn btn-primary" id="b2">Create Event</button></span>
                            </center>
                        </div>
                    </form>
                </div>
            </div>


        );
    }
}

export default Drive;