// import React, { useEffect, useState } from 'react'
// import firebase from '../firebase'
// import { withRouter } from 'react-router-dom'
//
//
// function Dashboard(props) {
//
// 	const [comment, setComment] = useState('');
// 	const [editComment , setEditedComment] = useState('');
//
// 	useEffect(() => {
// 		setEditedComment('');
// 		if(firebase.getCurrentUsername()){
// 			firebase.getCurrentUserComment().then(setComment)
// 		}
// 	},[]);
//
// 	function handleComentsChange(comment) {
// 		firebase.addComment(editComment);
// 		setComment(comment);
// 	}
//
// 	if(!firebase.getCurrentUsername()) {
// 		// not logged in
// 		alert('Please login first');
// 		props.history.replace('/login')
// 	}
// 	return (
// 		<>
//
//             <main className={classes.main}>
//                 <Paper className={classes.paper}>
//                     <Avatar className={classes.avatar}>
//                         <VerifiedUserOutlined />
//                     </Avatar>
//                     <Typography component="h1" variant="h5">
//                         Hello { firebase.getCurrentUsername() }
//                     </Typography>
//                     <Typography component="h1" variant="h6">
//                         Your comment: {comment ? `"${comment}"` : <CircularProgress size={20} />}
//                     </Typography>
//                     <Input autoComplete="off" value={editComment} onChange={e => setEditedComment(e.target.value)} placeholder="Change it"/>
//                     <br/>
//                     <Button color="inherit" variant="contained" type="submit" onClick={()=>handleComentsChange(editComment)}>Submit Comment</Button>
//                     <Button
//                         type="submit"
//                         variant="contained"
//                         color="secondary"
//                         onClick={logout}
//                         className={classes.submit}>
//                         Logout
//                     </Button>
//                     <Button
//                         type="submit"
//                         variant="contained"
//                         onClick={()=>props.history.push('/home')}
//                         className={classes.submit}>
//                         home
//                     </Button>
//                 </Paper>
//             </main>
// 		</>
// 	);
//
// 	async function logout() {
// 		await firebase.logout();
// 		sessionStorage.removeItem('token');
// 		props.history.push('/register')
// 	}
// }
//
// export default withRouter(Dashboard)
