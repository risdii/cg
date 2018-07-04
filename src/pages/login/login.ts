import { Component, Pipe, PipeTransform, trigger, state, style, transition, animate, keyframes, ElementRef  } from '@angular/core';
import { NavController, Platform, MenuController, Events, LoadingController, ToastController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterPage } from '../../pages/register/register';
import { HomePage } from '../../pages/home/home';

/*
  Generated class for the Login page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-login',
	templateUrl: 'login.html',
	
})
export class LoginPage {
	loginForm: FormGroup;
	loginError: string;

	constructor(){}

}