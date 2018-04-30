import { Component, Pipe, PipeTransform, trigger, state, style, transition, animate, keyframes, ElementRef  } from '@angular/core';
import { NavController, Platform, MenuController, Events } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/*
  Generated class for the ForgotPass page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-forgot-pass',
  templateUrl: 'forgot-pass.html'
})
export class ForgotPassPage {
  loginForm: FormGroup;
    password: any;
    type: any;
    text: any;
    user: any = { email: '', password: '' };

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

  ionViewDidLoad() {
    console.log('Hello ForgotPassPage Page');
  }

}
