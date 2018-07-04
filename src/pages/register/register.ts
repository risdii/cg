import { Component, Pipe, PipeTransform, trigger, state, style, transition, animate, keyframes, ElementRef} from '@angular/core';
import { NavController, Platform, MenuController, Events,LoadingController,AlertController} from 'ionic-angular';
import { Toast, Diagnostic, NativeStorage } from 'ionic-native';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';

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
  
    type: any;
    facebook: any;
    check: any;
    status: any = "check";
    
    emailChanged: boolean = false;
    passwordChanged: boolean = false;
    submitAttempt: boolean = false;
    animateClass = { 'zoom-in': true };
    signupError: string;
    form: FormGroup;


    constructor(
        private platform: Platform,
        private builder: FormBuilder,
        private nav: NavController, 
        private event: Events, 
        private menu: MenuController,
        private navCtrl: NavController,
        public alertCtrl:AlertController,
        public loading:LoadingController,
        
      
      ) {
               

  }


}
  
