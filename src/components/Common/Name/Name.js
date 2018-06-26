import React, { Component } from 'react';
import  './Name.css';
class Name extends Component {
    constructor(props) {
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.state = {
            NameValue: '',
            isNameEmpty: false,
        }
    }
    onNameChange(event) {
        const name = event.target.value;
        if (name === '') {
            this.props.updateFormStatus(false);
            this.setState({
                isNameEmpty: true
            })
        }
        else if (this.checkNameContainsNumber(name)) {
            //this.nameContainsNumber_error();
                        this.props.updateFormStatus(false);
                        this.setState({
                            isNameEmpty: true
                    })}
         else {
            
            this.props.updateFormStatus(true);
            this.setState({
                isNameEmpty: false
            })
        }
    }

    checkNameContainsNumber(name) {
        for(var i=0;i<name.length;i++)
            {
                if(name[i] >= 0 && name[i] <=9)
                   return true;
            }
            return false;
    }

    // nameContainsNumber_error()
    // {
    //     document.getElementById("NameError").innerHTML = "no number to be used";
    // }
    // validateFirstName() {
    //     const firstName = document.getElementById('Name').value;
    //     if (firstName == '') {
    //         return false;
    //     }
    //     return true;
    // }
    render() {
        return (
            <div>
                <div class="form-group row">
                            <label for="name" class="col-sm-2 col-form-label"> Name    </label>
                            <div class="col-sm-10">
                                <input type="plain-text" name="name" id="name" 
                                onChange={this.onNameChange.bind(this)} />
                                {/* { <span class="span-for-errors" id="errForFirstName"></span> } */}
                            </div>
                        </div>
                        {this.state.isNameEmpty && <span id="NameError"  class="alert alert-danger"  >Please enter your name</span>}
            
            </div>
        );
    }
}

export default Name;