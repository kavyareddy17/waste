import React, { Component } from 'react';
import './AdminDashboard.css';

import { Link } from 'react-router-dom';
class AdminDashboard extends Component {
    render() {
        return (
            <div><div class="main-container" id="main-con">
                <center>
                    <nav class="navbar navbar-inverse" id="dashbar" >
                        <div class="container-fluid">
                            <ul class="nav navbar-nav navbar-right">
                                <li id="a"  ><p id="pid"><b>iSlot</b></p> </li>
                                <li  ><p id="pad"><b>Dashboard</b></p> </li>
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
                        <span><h1 class="h1">Recent Events</h1>
                            <h1><button class="glyphicon glyphicon-plus-sign" id="btn"></button></h1></span>
                            <Link to={'/Angularwalkin'}>  <span><button id="b1" type="button" class="btn btn-default"><p id="name"><h4>Angular WalkIns</h4></p></button></span></Link>
                        <span><button id="b2" type="button" class="btn btn-default"><p id="name1"><h4>Java Walkins</h4></p></button></span>
                    </div>
                    <div class="container2">
                        <h1 class="upc">Upcoming Events</h1>
                        <span><button id="b3" type="button" class="btn btn-default"><p id="name1"><h4>.Net Walkins</h4></p></button></span>

                        <span><button id="b4" type="button" class="btn btn-default"><p id="name"><h4>Informatica Walkins</h4></p></button></span>
                    </div>


                </center>
            </div>
            </div>
        );
    }
}

export default AdminDashboard;
