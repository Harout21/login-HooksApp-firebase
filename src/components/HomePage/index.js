import React from 'react'
import {Button} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import firebase from "../firebase";
import 'firebase/auth'

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
	const { classes } = props;
	if(!firebase.getCurrentUsername()){
		props.history.replace('/register')
	}

	return (
	<>
		<h1>Home</h1>
		<h3>whats on your mind</h3>
		<Button
			type="submit"
			fullWidth
			variant="contained"
			color="secondary"
			onClick={logout}
			className={classes.submit}>
			Logout
		</Button>
	</>
	)
	async function logout() {
		await firebase.logout()
		props.history.push('/login')
	}
}


export default withStyles(styles)(HomePage)