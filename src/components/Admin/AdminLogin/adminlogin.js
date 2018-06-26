import React, { Component } from 'react';
import './adminlogin.css';
import { Link } from 'react-router-dom';
import Interviewer from '../../Interviewer/Interviewer';
class AdminLogin extends Component {

  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="modal-body">
              <div class="well">
                <center><h2>ADMIN</h2></center>
                <ul class="nav nav-tabs">
                  <li class="active"><a href="#login" data-toggle="tab">Login</a></li>
                  <li><a href="#create" data-toggle="tab">Register</a></li>
                </ul>
                <div id="myTabContent" class="tab-content">
                  <div class="tab-pane active in" id="login">
                    <form class="form-horizontal" action='' method="POST">
                      <fieldset>
                        {/* <center><div>
                          <legend>Login</legend>
                        </div>   </center> */}
                        <div class="control-group">
                          <label class="control-label" for="username">Username</label>
                          <div class="controls">
                            <input type="text" id="username" name="username" placeholder="" class="input-xlarge">
                             </input>
                          </div>
                        </div><br></br>
                        <div class="control-group">
                          <label class="control-label" for="password">Password</label>
                          <div class="controls">
                            <input type="password" id="password" name="password" placeholder="" class="input-xlarge"> 
                            </input>
                          </div>
                        </div>
                        <br></br>
                        <div class="control-group">

                          <div class="controls">
                            <button class="btn btn-success"><Link to={'/AdminDashboard'}>Login</Link></button>
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                  <div class="tab-pane fade" id="create">
                    {/* <form id="tab">
                      {/* <div>
                        <center> <legend>Register</legend></center>
                      </div> 
                      <label>Username</label><br></br>
                      <input type="text" value="" class="input-xlarge"/><br></br><br></br> 
                     
                      <label>First Name</label><br></br>
                      <input type="text" value="" class="input-xlarge"/><br></br><br></br>
                    
                      <label>Last Name</label><br></br>
                      <input type="text" value="" class="input-xlarge"/><br></br><br></br>
                      
                      <label>Email</label><br></br>
                      <input type="text" value="" class="input-xlarge"/><br></br><br></br>
                      
                      <div>
                        <button class="btn btn-success">Create Account</button>
                      </div>
                    </form> */}
                    <Interviewer/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




    )


  };
}
export default AdminLogin;