import { Component, trigger, state, style, transition, animate, keyframes, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the WriteReview page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-write-review',
  templateUrl: 'write-review.html',
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
        ])
    ]
})
export class WriteReviewPage {
item: any;
rating: any = 0;
  constructor(public navCtrl: NavController, navParams: NavParams) {
  	this.item = navParams.get('item');
  }

}
