import React, { useState, useEffect } from 'react'
import './styles.css'
import HomePage from '../HomePage'
import Login from '../Login'
import Register from '../Register'
import Dashboard from '../Dashboard'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline, CircularProgress } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import firebase from '../firebase'
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
	palette: {
		primary: purple,
		secondary: green,
		default:red
	},
	status: {
		danger: 'orange',
	},
});

export default function App() {

	const [firebaseInitialized, setFirebaseInitialized] = useState(false);

	useEffect(() => {
		firebase.isInitialized().then(val => {
			setFirebaseInitialized(val)
		})
	},[]);


	return firebaseInitialized !== false ? (
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Switch>
					{
						!sessionStorage.getItem('token') ? <Route exact path="/register" component={Register} /> :
							<Route exact path="/" component={HomePage} />
					}
					<Route exact path="/login" component={Login} />
					<Route exact path="/dashboard" component={Dashboard} />
				</Switch>
			</Router>
		</MuiThemeProvider>
	) : <div id="loader"><CircularProgress /></div>
}