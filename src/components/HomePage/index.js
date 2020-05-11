import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import firebase from "../firebase";
import 'firebase/auth'
import NeonClock from "../clock/clock";
import './home.css'

const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing(3),
		marginRight: theme.spacing(3),
		[theme.breakpoints.up(400 + theme.spacing (3 , 2))]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	submit: {
		marginTop: theme.spacing(3),
	},
})

function HomePage(props) {
	if(!firebase.getCurrentUsername()){
		props.history.replace('/register')
	}

	return (
	<>
		<div className="home-text">
			<h1>Home {firebase.getCurrentUsername()}</h1>
			<h3>What`s On Your Mind Today ?</h3>
		</div>
		<div className="btn-div-home">
			<button
				type="submit"
				variant="contained"
				onClick={logout}
				className="button">
				Logout
			</button>
		</div>
		{
			firebase.getCurrentUsername() ? <NeonClock/> :""
		}
	</>
	);
	async function logout() {
		await firebase.logout();
		props.history.push('/login')
	}
}


export default withStyles(styles)(HomePage)