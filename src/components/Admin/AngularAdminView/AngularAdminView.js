import React, { Component } from 'react';
import './AngularAdminView.css';

import { Link } from 'react-router-dom';
class AngularAdminView extends Component {
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
                                            <li><Link to={'/InterviewerLogin'}>logout</Link></li></center>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div id="maincont" class="container">
                        <div class="row">
                            <div class="modal-body">
                                <div id="mainwell" class="well">
                                    <center><h2>Angular Walk In</h2></center>
                                    <ul class="nav nav-tabs">
                                        <li class="active"><a href="#login"
                                            data-toggle="tab">View</a></li>
                                        <li><a href="#create" data-toggle="tab">Update</a></li>
                                    </ul>
                                    <div id="myTabContent" class="tab-content">
                                        <div class="tab-pane active in" id="login">
                                            <form class="form-horizontal" action='' method="POST">
                                                <fieldset>
                                                    <br></br>
                                                    <div class="control-group">
                                                        <div class="well"><span id="timing">9AM-11AM</span>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <div id="innerwell" class="well"><span class="glyphicon glyphicon-user">Kiran</span>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-user">Mohan</span></div> 
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <span class="badge">5</span></div>
                                                    </div>
                                                    <div class="well"><span id="timing">9AM-11AM</span>
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    <div id="innerwell" class="well">
                                                        <span class="glyphicon glyphicon-user">Kiran</span>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <span class="glyphicon glyphicon-user">Mohan</span></div>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <span class="badge">5</span></div>
                                                </fieldset>
                                            </form>
                                        </div>
                                        <div class="tab-pane fade" id="create">
                                            <form id="tab">                                                
                                                <label>Username</label><br></br>
                                                <input type="text" value="" class="input-xlarge" /><br></br><br></br>
                                                <label>First Name</label><br></br>
                                                <input type="text" value="" class="input-xlarge" /><br></br><br></br>
                                                <label>Last Name</label><br></br>
                                                <input type="text" value="" class="input-xlarge" /><br></br><br></br>
                                                <label>Email</label><br></br>
                                                <input type="text" value="" class="input-xlarge" /><br></br><br></br>
                                                <div>
                                                    <button class="btn btn-success">Create Account</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>        
                </center>           
            </div >
            </div >
        );
    }
}

export default AngularAdminView;



















































