import React from 'react';
import {Router, Switch} from 'react-router-dom';
import HomePage from '../components/HomePage/index';
import Dashboard from '../components/Dashboard/index';
import LoginPage from '../components/Login/index';
import RegisterPage from '../components/Register/index';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';

import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const  Routes = () => {
        return( <Router history={history}>
            <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                <PrivateRoute exact path="/home" component={HomePage}/>
                <PublicRoute path="/login" component={LoginPage}/>
                <PublicRoute path="/register" component={RegisterPage}/>
            </Switch>
        </Router>
    )
};

export default Routes;