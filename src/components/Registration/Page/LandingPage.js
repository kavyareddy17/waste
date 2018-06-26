import React, { Component } from 'react';
// import  back from './back.png';
import './LandingPage.css';
import { Link } from 'react-router-dom';
class LandingPage extends Component {
    render() {
        return (
            <div id="home">
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <ul class="nav navbar-nav navbar-right">
                            <li><a data-toggle="dropdown"> <span class="glyphicon glyphicon-log-in"></span> Login </a>
                                <ul class="dropdown-menu">

                                   <li><Link to={'/AdminLogin'}>Admin Login</Link></li>

                                    <li><Link to={'/InterviewerLogin'}>Interviewer Login</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default LandingPage;
