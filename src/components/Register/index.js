import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../firebase'
import './register.css'
import  Typewriter from '../writerReg/writer'


function Register(props) {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [comment, setComment] = useState('')

	return (
		<>
			<form  className="login-form" onSubmit={e => e.preventDefault() && false }>
				<h1 className="mytitle"><Typewriter/></h1>
				<h2 className="mytext">Welcome To My App Cute</h2>

				<div className="txtb">
					<input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Username"/>
				</div>

				<div className="txtb">
					<input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
				</div>

				<div className="txtb">
					<input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
				</div>

				<div className="txtb">
					<input type="text" value={comment} onChange={e => setComment(e.target.value)} placeholder="Comment" />
				</div>

				<button type="submit" className="logbtn" onClick={onRegister}> Register</button>

				<div className="bottom-text">
					You have Already Account? <Link type="submit"
													to="/login">Go to Login</Link>
				</div>
			</form>
		</>
	);

	async function onRegister() {
		try {
			await firebase.register(name, email, password);
			await firebase.addComment(comment);
			firebase.getCurrentUsername();
			sessionStorage.setItem("token",firebase.auth.currentUser.refreshToken);
			props.history.replace('/dashboard')
		} catch(error) {
			alert(error.message)
		}
	}
}

export default withRouter(Register)
