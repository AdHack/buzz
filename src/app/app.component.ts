import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UserAuth } from '../providers/user-auth';

import { RegisterPage } from '../pages/register/register';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any = RegisterPage;

  constructor(	private userAuth: UserAuth,	
  				private platform: Platform, 
  				private statusBar: StatusBar, 
  				private splashScreen: SplashScreen) {
    platform.ready().then(() => {
    	/* Set root page dependent on user's login status */
    	if(this.userAuth.isLoggedIn()) {
    		console.log("User has existing login");
    		this.rootPage = RegisterPage;
    	} else if(userAuth.hasRegistered()) {
    		console.log("User is registered but not logged in");
    		this.rootPage = RegisterPage;
    	} else {
    		console.log("User has not registered");
    		this.rootPage = RegisterPage;
    	}

    	/* And away we go! */
    	statusBar.styleDefault();
    	splashScreen.hide();
    });
  }
}
