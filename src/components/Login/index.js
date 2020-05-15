import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../firebase'
import './login.css'


function SignIn(props) {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<>
			<div>
				<div className="backgroundLogin"></div>
				<div className="title">
					<img
						alt=""
						className="logo"
						src="http://www.bits-dubai.ac.ae/intranet/i/Tagline_colored.png"
					/>
					<h2 className="text">Made By Haro21</h2>
				</div>

				<div className="LoginBox">
					<div className="mercury-logologin">
						<h3 className="mytext">We Are Happy To See You </h3>
					</div>
					<form onSubmit={e => e.preventDefault() && false}>
						<div className="UserLogin">
							<label htmlFor="userName" className="control-Element">
								Login
							</label>
							<input className="login-control"
								id="email" name="email" autoComplete="off" autoFocus value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div className="UserLogin">
							<label htmlFor="userpassword" className="control-Element">
								Password
							</label>
							<input className="login-control"
								name="password" type="password" id="password" autoComplete="off" value={password}
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
						<button
							type="submit"
							className="submitLogin"
							onClick={login}
						>
							Sign in
						</button>
						<div className="Login-forgetRegister">
							<Link className="registerUser float-left" type="submit"
									to="/register"
							>
								Register
							</Link>

						</div>
					</form>
				</div>

			</div>
		</>
	);

	async function login() {
		try {
			await firebase.login(email, password);
			firebase.getCurrentUsername();
			sessionStorage.setItem('token', firebase.auth.currentUser.refreshToken);
			props.history.replace('/dashboard')
		} catch(error) {
			alert(error.message)
		}
	}
}

export default withRouter(SignIn)

