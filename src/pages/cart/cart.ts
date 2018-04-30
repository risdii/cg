import { Component, trigger, state, style, transition, animate, keyframes, ElementRef  } from '@angular/core';
import { NavController } from 'ionic-angular';


/*
  Generated class for the Cart page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
    animations: [
        trigger('flyInTopSlow', [
            state("0", style({
                transform: 'translate3d(0,0,0)'
            })),
            transition('* => 0', [
                animate('500ms ease-in', keyframes([
                    style({ transform: 'translate3d(0,-500px,0)', offset: 0 }),
                    style({ transform: 'translate3d(0,0,0)', offset: 1 })
                ]))
            ])
        ]),

        trigger('flyAlternameSlow', [
            state("1", style({
                transform: 'translate3d(0,0,0)'
            })),
            state("0", style({
                transform: 'translate3d(0,0,0)'
            })),
            transition('* => 1', [
                animate('1000ms ease-in', keyframes([
                    style({ transform: 'translate3d(500px,0,0', offset: 0 }),
                    style({ transform: 'translate3d(-10px,0,0)', offset: 0.5 }),
                    style({ transform: 'translate3d(0,0,0)', offset: 1 })
                ]))
            ]),
            transition('* => 0', [
                animate('1000ms ease-in', keyframes([
                    style({ transform: 'translate3d(-1000px,0,0', offset: 0 }),
                    style({ transform: 'translate3d(10px,0,0)', offset: 0.5 }),
                    style({ transform: 'translate3d(0,0,0)', offset: 1 })
                ]))
            ])
        ])

    ]
})
export class CartPage {
qty:any = 1;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CartPage Page');
  }

  add(){
this.qty = this.qty + 1; //to add quantity

  }

  sub(){
    if(this.qty != 1)
this.qty = this.qty - 1;   //to remove quantity

  } 

}
