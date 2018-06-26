import React, { Component } from 'react';
import './App.css';
// import $ from 'jquery';
// import InterviewerLogin from '../Interviewer/InterviewerLogin/InterviewerLogin';
// import AdminLogin from './adminlogin';
// import AdminDashboard from './AdminDashboard';
// import AdminDetail from './AdminDetail';
import AngularAdminView from './components/Admin/AngularAdminView/AngularAdminView';
import InterviewerDashboard from './components/Interviewer/InterviewerDashboard/InterviewerDashboard';
import LandingPage from './components/Registration/Page/LandingPage';
// import Drive from './components/Admin/Drive';
// import Admin from './componentsAdmin/Admin';
import InterviewerLogin from './components/Interviewer/InterviewerLogin/InterviewerLogin';
import AdminDashboard from './components/Admin/AdminDashboard/AdminDashboard';
import AdminDetail from './components/Admin/AdminDetail/AdminDetail';
import AdminLogin from './components/Admin/AdminLogin/adminlogin';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>

        <Router>
          <div>

            <Switch>
              <Route exact path={'/'} component={LandingPage} />
              <Route exact path={'/AdminLogin'} component={AdminLogin} />
              <Route exact path={'/InterviewerLogin'} component={InterviewerLogin} />
              <Route exact path={'/AdminDashboard'} component={AdminDashboard} />
              <Route exact path={'/logout'} component={LandingPage} />
              <Route exact path={'/Angularwalkin'} component={AdminDetail} />
              <Route exact path={'/InterviewerDashboard'} component={InterviewerDashboard} />
            </Switch></div>
        </Router></div>

    );
  }
}

export default App;










