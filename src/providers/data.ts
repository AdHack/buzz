import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class Data {

  private _root: any;

  constructor() {
  	console.log("Data Prodvider Loaded");
  	this._root = firebase.database().ref('/');
  }

  getRef(child_path:string): any {
  	if(child_path) { return this._root.child(child_path); } 
  	else { return null; }
  }

  getAuthRef():any {
  	return firebase.auth();
  }
}