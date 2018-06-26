import React, { Component } from 'react';
import Header from '../../Common/Header/Header';
import './EventDetail.css';
class EventDetail extends Component {
    render() {
        return (
            <div class="container">
                <Header/>
                 {/* <button class="but" type="button" class="btn1">View</button>
                <button class="but" type="button" class="btn2">Update</button> */}
            <div class="update-container">
                <div class="inner-container">
                    <ul id="inbox">
                    <li id="row1"><input type="text" id="in1"  value="Sudheer" readOnly/>
                    <input type="text" id="in2" value="2" readOnly/><button class="but btn-primary" type="button"> Approve</button>
                    </li> 
                    <li id="row1"><input type="text" id="in1"  value="kumar" readOnly/>
                    <input type="text" id="in2" value="1" readOnly/><button class="but btn-primary" type="button"> Approve</button>
                    </li> 
                    <li id="row1"><input type="text" id="in1"  value="Antar" readOnly/>
                    <input type="text" id="in2" value="3" readOnly/><button class="but btn-primary" type="button"> Approve</button>
                    </li> 
                    </ul>
                    <button class="but1 btn-primary" type="button">Close Event</button> 
                </div>
            </div>
            </div>
        );
    }
}

export default EventDetail;