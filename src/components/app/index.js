import React, { useState, useEffect } from 'react'
import './styles.css'
import HomePage from '../HomePage'
import Login from '../Login'
import Register from '../Register'
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom'
import firebase from '../firebase'
import PrivateRoute from "../../routes/privateRoute";
import {MetroSpinner} from "react-spinners-kit";
import DashboardRender from "../Dashboard/dashboardRender";


export default function App() {

	const [firebaseInitialized, setFirebaseInitialized] = useState(false);

	useEffect(() => {
		firebase.isInitialized().then(val => {
			setFirebaseInitialized(val)
		})
	},[]);

	return firebaseInitialized !== false ? (
			<Router>
				<Switch>
					<Route exact path="/register" component={Register}/>
					<Route exact path="/login" component={Login} />
					<PrivateRoute exact path="/home" component={HomePage}/>
					<PrivateRoute exact path="/dashboard" component={DashboardRender}/>
					<Redirect from="*" to="/register"/>
				</Switch>
			</Router>
	) : <div id="loader"><MetroSpinner
		size={50}
		color="white"
		loading={true}
	/></div>
}