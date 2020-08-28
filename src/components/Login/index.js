import React, {useState} from 'react'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../firebase'
import './login.css'
import Typewriter from "./writerSign/writer";
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';

function SignIn() {
    const history = useHistory();
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
					<h2 className="my-title-haro21">Made By Haro21</h2>
				</div>
				<IconButton title="Back" onClick={history.goBack}>
					<ArrowBackIcon fontSize="large" title="hello" style={{color:"white"}}/>
				</IconButton>
				<div className="LoginBox">
					<div className="mercury-logologin">
						<h3 className="mytext"><Typewriter/> </h3>
					</div>
					<form onSubmit={e => e.preventDefault() && false}>
						<div className="UserLogin">
							<label htmlFor="userName" className="control-Element">
							<input className="login-control"
								id="email" name="email" autoComplete="off" autoFocus value={email}
								placeholder="Email"
								   onChange={e => setEmail(e.target.value)}
							/>
							</label>
						</div>
						<div className="UserLogin">
							<label htmlFor="userpassword" className="control-Element">
							<input className="login-control"
								name="password" type="password" id="password" autoComplete="off" value={password}
							    placeholder="Password"
								onChange={e => setPassword(e.target.value)}
							/>
							</label>

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

		} catch(error) {
			alert(error.message)
		}
		history.replace('/dashboard')
	}
}

export default withRouter(SignIn)

