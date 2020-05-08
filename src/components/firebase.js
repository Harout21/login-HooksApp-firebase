import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const config = {
	apiKey: "AIzaSyDugXlggxSTYl5-YKsQ-9XDi5yv9AjNDig",
	authDomain: "authenticationusinghooks.firebaseapp.com",
	databaseURL: "https://authenticationusinghooks.firebaseio.com",
	projectId: "authenticationusinghooks",
	storageBucket: "authenticationusinghooks.appspot.com",
	messagingSenderId: "245383997715",
	appId: "1:245383997715:web:96c3a796ad64b3867692e6",
	measurementId: "G-QZHQLDC6JY"
};

class Firebase {
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		this.db = app.firestore()
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
	}

	addComment(comment) {
		if(!this.auth.currentUser) {
			return alert('Not authorized')
		}

		return this.auth.currentUser ? this.db.doc(`users_authenticationusinghooks/${this.auth.currentUser.uid}`).set({
			comment
		})  : ""
	}

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}

	async getCurrentUserComment() {
		const comment = await this.db.doc(`users_authenticationusinghooks/${this.auth.currentUser.uid}`).get();
		return  comment.get('comment')
	}
}

export default new Firebase()