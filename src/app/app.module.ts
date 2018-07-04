import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { ProductListPage } from '../pages/product-list/product-list';
import { ReviewsRatingsPage } from '../pages/reviews-ratings/reviews-ratings';
import { WriteReviewPage } from '../pages/write-review/write-review';
import { OneProduct } from '../pages/one-product/one-product';
import { MyOrdersPage } from '../pages/my-orders/my-orders';
import { MyWishlistPage } from '../pages/my-wishlist/my-wishlist';
import { MyAccountPage } from '../pages/my-account/my-account';
import { CartPage } from '../pages/cart/cart';
import { NotificationsPage } from '../pages/notifications/notifications';
import { CustomerServicePage } from '../pages/customer-service/customer-service';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ForgotPassPage } from '../pages/forgot-pass/forgot-pass';

//Components
import { ProductsLayoutComponent } from '../components/products-layout/products-layout';
import { CarouselComponent } from '../components/carousel/carousel';
import { DealsComponent } from '../components/deals/deals';
import { CartComponent } from '../components/cart/cart';
import { CategoryTileComponent } from '../components/category-tile/category-tile';

import { Ionic2RatingModule } from 'ionic2-rating/';



let pages = [
    MyApp,
    HomePage,
    ProductListPage,
    ReviewsRatingsPage,
    WriteReviewPage,
    OneProduct,
    MyOrdersPage,
    MyWishlistPage,
    MyAccountPage,
    CartPage,
    NotificationsPage,
    CustomerServicePage,
    LoginPage,
    RegisterPage,
    ForgotPassPage
];

export function declarations() {
  return [pages,ProductsLayoutComponent,CarouselComponent,CategoryTileComponent,DealsComponent,CartComponent];
}

export function entryComponents() {
  return pages;
}

export function providers() {
  return [
    // Keep this to enable Ionic's runtime error handling during development
    StatusBar,SplashScreen,{ provide: ErrorHandler, useClass: IonicErrorHandler }
  ];
}

@NgModule({
  declarations: declarations(),
  imports: [
    IonicModule.forRoot(MyApp),BrowserModule,HttpModule,BrowserAnimationsModule,Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: entryComponents(),
  providers: providers()
})
export class AppModule {}
