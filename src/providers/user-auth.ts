import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Data } from './data';

@Injectable()
export class UserAuth {

	private auth:any = null;

  constructor(private data: Data) {
  	this.auth = data.getAuthRef();
  }

  /* Returns true if this device has ever been logged in */
  hasRegistered(): boolean {
  	return false;
  }
  
  /* Returns if the user is logged in or not */
  isLoggedIn(): boolean {
  	return true;
  }

  createUserFromEmail(email: string): any {

  }



}
