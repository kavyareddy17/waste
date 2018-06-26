import React, { Component } from 'react';
import './Toall.css'
//import validator from 'validator';

class Toall extends Component {
    constructor(props) {
        super(props);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onNumberChange = this.onNumberChange.bind(this);
        this.state = {
            EmailValue: '',
            isEmailEmpty: false,
            NumberValue: '',
            isNumberEmpty: false,
            isOnlyNumbers: false,
            PasswordValue: '',
            NumberError:false,
            EmailError:false


        }
    }





    onNumberChange(event) {
        const contactNumber = event.target.value;
        const length = event.target.value.length;

        if (contactNumber === '' || length < 10 || length > 10) {
            this.props.updateFormStatus(false);
            this.setState({
                isNumberEmpty: true
            })
        }
        else if(length==10){
            if(this.checkMobNumContainLetter(contactNumber))
                {
                    this.props.updateFormStatus(false);
                    this.setState({
                        isNumberEmpty: true
                }
        )}
       else {
            this.props.updateFormStatus(true);
            this.setState({
                isNumberEmpty: false
            })
        }

       
    }}

    checkMobNumContainLetter(contactNumber)
    {
    
        if(contactNumber.match((/^[1-9][0-9]{9}/)))
            {
                return false;
            }
        return true;
    }

    // mobile_number_contain_letter_error()
    // {
    //     document.getElementById('NumberError').innerHTML = "Mobile number should not contain letters";
    // }


    onEmailChange(event) {
        const email = event.target.value;
        // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // /^([a-z][A-Za-z0-9]{4,})+\@([virtusa.com])$/
        // /^[a-z|A-z][A-Z|a-Z|0-9]{5,}+\@virtusa.com$/
        // /^([A-Za-z0-9_\-\.])+\@([virtusa])+\.([A-Za-z]{2,4})$/
        if (email === '') {
            this.props.updateFormStatus(false);
            this.setState({
                isEmailEmpty: true
            })
        }
    
        else {
            if(this.checkVirtusa(email))
                {
                    this.props.updateFormStatus(true);
                    this.setState({
                        isEmailEmpty: false
                })}
                else{
                    this.props.updateFormStatus(false);
                    this.setState({
                        isEmailEmpty: true
                    })
                }
            this.props.updateFormStatus(true);
            this.setState({
                isEmailEmpty: false
            })
        }
 }
    

 checkVirtusa(email)
 {
  var s = email.substring(email.length-12,email.length);
   if(s!="@virtusa.com")
   {
       return false;
   }
   else
   {
       return true;
   }
 }

//  virtusa_error()
//  {
//      document.getElementById('EmailError').innerHTML ="Email Id  is not valid";
//  }
 
    render() {
        return (
            <div>

                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Email ID</label>
                    <div class="col-sm-10">
                        {/* <input value='email@email.com' name='email' validations={[required, email]}/> */}
                        <input type="email" name="email" id="email" placeholder="email@virtusa.com"
                            onChange={this.onEmailChange.bind(this)} />
                    </div>

                </div>
                {this.state.isEmailEmpty && <span id="EmailError" class="alert alert-danger"  >Please enter valid email</span>}
                <div class="form-group row">
                    <label for="password" class="col-sm-2 col-form-label">Password   </label>
                    <div class="col-sm-10">
                        <input type="password" id="pass" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="phonenumber" class="col-sm-2 col-form-label">Contact Number    </label>
                    <div class="col-sm-10">
                    <input type = "tel" pattern="[0-9]*" inputmode="numeric"  id="number" name="number"
                            onChange={this.onNumberChange.bind(this)}
                        />
                        {/* <PhoneInput placeholder="Enter phone number" value={ this.state.phone }
		                onChange={ phone => this.setState({ phone }) } /> */}

                    </div>
                </div>
                {this.state.isNumberEmpty && <span id="NumberError" class="alert alert-danger"  >Please enter valid number</span>}
            </div>
        );
    }
}

export default Toall;

// var sectionStyle={
//     width: 100,
//     height: 100,
//     background: url(''),
// };
// class {

// <div>
//     <section style={sectionStyle}>
//         </section>
// </div>
