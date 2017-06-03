import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

import { RegisterPage } from '../register/register';

import { UserAuth } from '../../providers/user-auth';

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

	constructor(private navCtrl: NavController, 
				private navParams: NavParams,
				private pageTransition: NativePageTransitions, 
				private auth: UserAuth) {

		if(!this.auth.hasRegistered()) {
			let options: NativeTransitionOptions = {
				duration: 1500,
				slowdownfactor: 3,
				iosdelay: 1000,
				androiddelay: 100
			};

			this.pageTransition.fade(options);
			//this.navCtrl.push(RegisterPage);
		}
		else {

		}
	}


	/* Fade the transition */
	ionViewWillLeave() {
		
	}


}
