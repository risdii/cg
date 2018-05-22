import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProductListPage } from '../../pages/product-list/product-list';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

myInput: any = '';
  constructor(public navCtrl: NavController) {
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
     }

openCategory(category) {
   this.navCtrl.push(ProductListPage, { category: category});
}



}


