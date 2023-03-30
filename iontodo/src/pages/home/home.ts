import { Component } from '@angular/core';
import { ModalController, NavController} from 'ionic-angular';
import {Data} from '../../providers/data/data';
import {AddItemPage} from '../add-item/add-item';
import {ItemDetailPage} from '../item-detail/item-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = [];

  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public dataService: Data) {
 
    this.dataService.getData().then((todos)=>{
      if(todos){
        this.items = todos;
      }
    });
  }
ionViewDidLoad(){

  // this.items =[
  //   {title:'todo 1', description:'tarefa 1'},
  //   {title:'todo 2', description:'tarefa 2'},
  //   {title:'todo 3', description:'tarefa 3'}
  // ];
}

addItem(){
  let addModal = this.modalCtrl.create(AddItemPage);
  addModal.onDidDismiss((item) =>{
    if(item){
      this.saveItem(item);
    }
  });
addModal.present();
}
saveItem(item){
   this.items.push(item);
   this.dataService.save(this.items);
}

viewItem(item){
  this.navCtrl.push(ItemDetailPage,{
    item:item
  });
}

deleteItem(item){
  //this.items.slice(this.items.findIndex(item),1);
  //this.dataService.save(this.items);
for(var i = 0; i < this.items.length; i++){
  if(this.items[i] == item){
    this.items.splice(i, 1);
  }
}
}

updateItem(item){
  let addModal = this.modalCtrl.create(AddItemPage);
  addModal.onDidDismiss((item) =>{
    if(item){
      this.saveItem(item);
    }
  });
addModal.present();
}
}
