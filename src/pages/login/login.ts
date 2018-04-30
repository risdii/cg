import { Component, Pipe, PipeTransform, trigger, state, style, transition, animate, keyframes, ElementRef  } from '@angular/core';
import { NavController, Platform, MenuController, Events } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterPage } from '../../pages/register/register';
import { ForgotPassPage } from '../../pages/forgot-pass/forgot-pass';
import { HomePage } from '../../pages/home/home';
import { AuthService } from '../../services/auth.service';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {


    loginForm: FormGroup;
    password: any;
    loginError : string;
    type: any;
    text: any;
    facebook: any;
    user: any = { email: '', password: '' };
    emailChanged: boolean = false;
    passwordChanged: boolean = false;
    submitAttempt: boolean = false;
    animateClass = { 'zoom-in': true };
   

    constructor(private navCtrl: NavController, private auth: AuthService, private platform: Platform, private builder: FormBuilder, private nav: NavController, private event: Events, private menu: MenuController,fb: FormBuilder) {
        this.nav = nav;
        this.menu = menu;
        this.platform = platform;
        this.type = "User";

        this.loginForm = fb.group({
          email: ['', Validators.compose([Validators.required, Validators.email])],
          password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        });
        
  }

  register(){
    this.nav.push(RegisterPage) //navigate to RegisterPage
  }

  forgotpass(){
    this.nav.push(ForgotPassPage) //navigate to ForgetPassPage
  }

  login(){
    //this.nav.setRoot(HomePage) //navigate to HomePage
    let data = this.loginForm.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.setRoot(HomePage),
				error => this.loginError = error.message
			);
	
  }
}
