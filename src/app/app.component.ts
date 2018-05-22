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
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { initializeApp } from 'firebase/app';
import {FirebaseApp} from 'angularfire2'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage : any;
  home:any;
  deals:any;

  email:any;

  @ViewChild(Nav) nav: Nav;

      pages: any[] = [
         { title: 'My Orders', icon: 'md-basket', component: MyOrdersPage },
         { title: 'My Wish List', icon: 'paper', component: MyWishlistPage },
         { title: 'My Account', icon: 'md-people', component: MyAccountPage },
         { title: 'Notifications', icon: 'md-settings', component: NotificationsPage },
         { title: 'Customer Service', icon: 'md-chatboxes', component: CustomerServicePage }

      ];

  constructor(public platform: Platform,private afauth:AngularFireAuth, public menu: MenuController, public statusBar: StatusBar, splashScreen: SplashScreen,private auth: AuthService) {
    this.home = { title: 'Home', icon: 'md-home', component: HomePage };


    this.auth.afAuth.authState
      .subscribe(
        user => {
          if (user) {
            this.rootPage = HomePage;
          } else {
            this.rootPage = HomePage;
          }
        },
        () => {
          this.rootPage = HomePage;
        }
      );

      this.initializeApp();
  }


  initializeApp() {
    //  this.rootPage = HomePage;
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
    });
  
    //
   }

  login() {
    this.menu.close();
    this.auth.signOut();
    this.nav.setRoot(LoginPage);
  }

  logout() {
    this.menu.close();
    this.auth.signOut();
    this.nav.setRoot(HomePage);
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

