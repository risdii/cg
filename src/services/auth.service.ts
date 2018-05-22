import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
	private user: firebase.User;

	constructor(public afAuth: AngularFireAuth,public db: AngularFireDatabase,) {
		afAuth.authState.subscribe(user => {
			this.user = user;
		});
	}
	signInWithEmail(credentials) {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
	}

	signUp(credentials) {
		return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
	}

	get authenticated(): boolean {
		return this.user !== null;
	}

	getEmail() {
		return this.user && this.user.email;
	}

	signOut(): Promise<void> {
		return this.afAuth.auth.signOut();
	}


	  //get current user data from firebase
  getUserData() {
    return this.afAuth.auth.currentUser;
  }
  updateUserProfile(user) {
	let name = user.name ? user.name : user.email;
	let photoUrl = user.photoURL;

	this.getUserData().updateProfile({
	  displayName: name,
	  photoURL: photoUrl
	});

this.db.object('user/' + user.uid).update({

email: user.email,
  })
}  

}