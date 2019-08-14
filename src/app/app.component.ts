import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'start-cooking';
  show = false;
  products = [];

  onAddProduct(form: NgForm){
    this.show = true;
    this.products.push(form.value.product);
    console.log(form.value.product);


  }
}
