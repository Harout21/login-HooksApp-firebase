import React from 'react'
import firebase from "../firebase";
import 'firebase/auth'
import NeonClock from "../clock/clock";
import './home.css'
import { useHistory } from 'react-router-dom'


function HomePage() {
	const history = useHistory();
	if(!firebase.getCurrentUsername()){
		history.replace('/register')
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
				onClick={logout}
				className="button">
				Logout
			</button>
			<button
				type="submit"
				onClick={()=>history.push("/dashboard")}
				className="button">
				To Dashboard
			</button>
		</div>
		{
			firebase.getCurrentUsername() ? <NeonClock/> :""
		}
	</>
	);
	async function logout() {
		await firebase.logout();
		sessionStorage.removeItem('token');
		history.push('/login')
	}
}


export default HomePage