import { Component, ViewChild } from '@angular/core';
import {Platform, Nav, Config, MenuController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ProductListPage } from '../pages/product-list/product-list';
import { MyOrdersPage } from '../pages/my-orders/my-orders';
import { MyWishlistPage } from '../pages/my-wishlist/my-wishlist';
import { MyAccountPage } from '../pages/my-account/my-account';
import { CartPage } from '../pages/cart/cart';
import { NotificationsPage } from '../pages/notifications/notifications';
import { CustomerServicePage } from '../pages/customer-service/customer-service';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;
  home:any;
  deals:any;

  @ViewChild(Nav) nav: Nav;

      pages: any[] = [
         { title: 'My Orders', icon: 'md-basket', component: MyOrdersPage },
         { title: 'My Wish List', icon: 'paper', component: MyWishlistPage },
         { title: 'My Account', icon: 'md-people', component: MyAccountPage },
         { title: 'Notifications', icon: 'md-settings', component: NotificationsPage },
         { title: 'Customer Service', icon: 'md-chatboxes', component: CustomerServicePage }

      ];

  constructor(platform: Platform,public menu: MenuController, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.home = { title: 'Home', icon: 'md-home', component: HomePage };
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

   login(){
    this.menu.close();
      this.nav.push(LoginPage);
   }

   openCart(){
    this.menu.close();
      this.nav.setRoot(CartPage);
   }  

  openPage(page) {
    this.menu.close();
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}

