import { Component, Pipe, PipeTransform, trigger, state, style, transition, animate, keyframes, ElementRef} from '@angular/core';
import { NavController, Platform, MenuController, Events,LoadingController,AlertController} from 'ionic-angular';
import { Toast, Diagnostic, NativeStorage } from 'ionic-native';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { AuthService } from '../../services/auth.service';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'as-page-register',
  templateUrl: './register.html'
})
export class RegisterPage {
    loginForm: FormGroup;
    password: any;
    type: any;
    facebook: any;
    check: any;
    status: any = "check";
    user: any = { email: '', password: '' };
    emailChanged: boolean = false;
    passwordChanged: boolean = false;
    submitAttempt: boolean = false;
    animateClass = { 'zoom-in': true };
    signupError: string;
	  form: FormGroup;

    constructor(fb: FormBuilder,
      private platform: Platform,
       private builder: FormBuilder,
        private nav: NavController, 
        private event: Events, 
        private menu: MenuController,
        private auth: AuthService,
        private navCtrl: NavController,
        public alertCtrl:AlertController,
        public loading:LoadingController
      
      ) {
        
        this.nav = nav;
        this.menu = menu;
        this.platform = platform;
        this.type = "User";


            
              this.form = fb.group({
                email: ['', Validators.compose([Validators.required, Validators.email])],
                password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
              });
  }

  signup() {
		let data = this.form.value;
		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signUp(credentials).then(
			() => this.navCtrl.setRoot(HomePage),
			error => this.signupError = error.message
		);
}




}
  
