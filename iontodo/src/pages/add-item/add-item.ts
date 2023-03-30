import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController,NavParams } from 'ionic-angular';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  title: string;
  description: string;

  constructor(public navCtrl: NavController, public view: ViewController,public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }
saveItem(){
  
  let newItem ={
    title:this.title,
    description:this.description
  };
  this.view.dismiss(newItem);
}
editItem(){
  this.title = this.navParams.get('item').title;
  this.description = this.navParams.get('item').description;
  let editItem ={
    title:this.title,
    description:this.description
  };
  this.view.dismiss(editItem);
}
close(){
  this.view.dismiss();
}

}
