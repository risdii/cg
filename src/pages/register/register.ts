import { Component, Pipe, PipeTransform, trigger, state, style, transition, animate, keyframes, ElementRef  } from '@angular/core';
import { NavController, Platform, MenuController, Events } from 'ionic-angular';
import { Toast, Diagnostic, NativeStorage } from 'ionic-native';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
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

    constructor(private platform: Platform, private builder: FormBuilder, private nav: NavController, private event: Events, private menu: MenuController,) {
        this.nav = nav;
        this.menu = menu;
        this.platform = platform;
        this.type = "User";

        this.loginForm = builder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });  
  }

}
