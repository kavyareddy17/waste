import React, { Component } from 'react';
import './InterviewerDashboard.css';

import { Link } from 'react-router-dom';
class InterviewerDashboard extends Component {
    render() {
        return (
            <div><div class="main-container" id="main-con">
                <center>
                    <nav class="navbar navbar-inverse" id="dashbar" >
                        <div class="container-fluid">
                            <ul class="nav navbar-nav navbar-right">
                                <li id="a"  ><a>iSlot</a> </li>
                                <li  ><a>Dashboard</a> </li>
                                <li ><a data-toggle="dropdown"> <span class="glyphicon glyphicon-option-vertical" id="gly"></span></a>
                                    <ul class="dropdown-menu">
                                        <center>
                                            <li><Link to={'/AdminLogin'}>Admin login</Link></li>
                                            <li><Link to={'/InterviewerLogin'}>interviewer login</Link></li>
                                            <li><Link to={'/AdminLogin'}>change password</Link></li>
                                            <li><Link to={'/logout'}>logout</Link></li></center>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>



                    <div class="container1">

                        <h1 class="h1">Recent Events</h1>

                        <button id="b1" type="button" class="btn btn-default"><p id="name"><h4>Angular WalkIns</h4></p></button>

                        <button id="b2" type="button" class="btn btn-default"><p id="name1"><h4>Java Walkins</h4></p></button>
                    
            </div >

                <div class="container2">

                    <h1 class="upc">Upcoming Events</h1>

                    <button id="b3" type="button" class="btn btn-default"><p id="name1"><h4>.Net Walkins</h4></p></button >



            <button id="b4" type="button" class="btn btn-default"><p id="name"><h4>Informatica Walkins</h4></p></button>
                    
                    </div >

            <div class="container3">

                <h2 class="pt glyphicon glyphicon-flash">Points so far..</h2>

                <div>

                    <p class="cont"><h4>Total</h4></p>

                    <p class="cont1"><h4>This month..</h4></p>

                </div>

                <input type="text" class="bx" readOnly value="23"/>

                <input type="text" class="bx1" readOnly value="197"/>

            </div>
                    
                   


                </center >
            
            </div >
            </div>
        );
    }
}

export default InterviewerDashboard;
