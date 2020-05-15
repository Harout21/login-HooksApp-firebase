import React, { useEffect, useState } from 'react'
import {Typography, Paper, Avatar, CircularProgress, Button, Input} from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import firebase from '../firebase'
import { withRouter } from 'react-router-dom'

const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing (3),
		marginRight: theme.spacing (3),
		[theme.breakpoints.up(400 + theme.spacing (3,2))]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing (8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing (2)}px ${theme.spacing (3)}px ${theme.spacing (3)}px`,
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	submit: {
		marginTop: theme.spacing(3),
	},
})

function Dashboard(props) {
	const { classes } = props
	const [comment, setComment] = useState('');
	const [editComment , setEditedComment] = useState('');

	useEffect(() => {
		setEditedComment('');
		if(firebase.getCurrentUsername()){
			firebase.getCurrentUserComment().then(setComment)
		}
	},[]);

	function handleComentsChange(comment) {
		firebase.addComment(editComment);
		setComment(comment);
	}

	if(!firebase.getCurrentUsername()) {
		// not logged in
		alert('Please login first');
		props.history.replace('/login')
	}
	return (
		<main className={classes.main}>
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<VerifiedUserOutlined />
				</Avatar>
				<Typography component="h1" variant="h5">
					Hello { firebase.getCurrentUsername() }
				</Typography>
				<Typography component="h1" variant="h6">
					Your comment: {comment ? `"${comment}"` : <CircularProgress size={20} />}
				</Typography>
				<Input autoComplete="off" value={editComment} onChange={e => setEditedComment(e.target.value)} placeholder="Change it"/>
				<br/>
				<Button color="inherit" variant="contained" type="submit" onClick={()=>handleComentsChange(editComment)}>Submit Comment</Button>
				<Button
					type="submit"
					variant="contained"
					color="secondary"
					onClick={logout}
					className={classes.submit}>
					Logout
          		</Button>
				<Button
					type="submit"
					variant="contained"
					onClick={()=>props.history.push('/home')}
					className={classes.submit}>
					home
          		</Button>
			</Paper>
		</main>
	)

	async function logout() {
		await firebase.logout();
		sessionStorage.removeItem('token');
		props.history.push('/register')
	}
}

export default withRouter(withStyles(styles)(Dashboard))