import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import { HttpClient, HttpHeaders, HttpErrorResponse, } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  product: any = {}; 
  constructor(public navCtrl: NavController, private HttpClient: HttpClient, public toast: ToastController) {}
  ionViewDidLoad() {
    console.log('Hello Addproduct Page'); 
    }

 insert(){
  this.product.action = "insert"; 
  this.HttpClient.post('http://localhost/product.php', this.product).subscribe(data=>{
  console.log(data); 
    if (data['status']=='success'){
      alert("Cliente Registrado");
    }
  }, err=>{
  console.log(err); 
  })
  }

  async showToast(message){
  let toast = await this.toast.create({
  message:message, 
  duration: 2000
  }); 
  toast.present(); 
  }

}