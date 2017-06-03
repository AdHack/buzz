import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { SQLite } from '@ionic-native/sqlite';

import { Data } from './data';

@Injectable()
export class UserAuth {

	private auth:any = null;

	constructor(private sql: SQLite	,
				private data: Data) {
		this.auth = data.getAuthRef();
	}

	/* Determines if the browser supports local storage */
	private localStorageAvailable(): boolean {
		try {
			let storage: any = window['localStorage'];
			let x: string = '__storage_test__';
			storage.setItem(x, x);
			storage.removeItem(x);
			return true;
		}
		catch(e) {
			return false;
		}
	}

	/* Returns true if this device has ever been logged in */
	hasRegistered(): boolean {
		if(!this.localStorageAvailable()) {
			console.warn("Local Storage not available");
			return false; 
		}
		else
		{
			let registered: string = localStorage.registered;
			return (typeof(registered) === 'undefined' || !registered) ? false : true;
		}
	}

	/* Register User */
	
  
  /* Returns if the user is logged in or not */
  isLoggedIn(): boolean {
  	return false;
  }

  createUserFromEmail(email: string): any {

  }



}
