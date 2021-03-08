import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators,} from '@angular/forms';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/services/stock.service';

let counter = 1;

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.scss'],
})
export class CreateStockComponent implements OnInit {
  public stock: Stock;
  public confirmed = false;
  //public message = null;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
  // public stockForm: FormGroup = new FormGroup({
  //   name: new FormControl(null, Validators.required),
  //   code: new FormControl(null, [Validators.required, Validators.minLength(2)]),
  //   price: new FormControl(0, [Validators.required, Validators.min(0)]),
  //   notablePeople: this.fb.array([])
  //   });

  console(v){
    console.log(v);
  }
  constructor() {
    this.stock = new Stock('', '', 0, 0, 'NASDAQ');
  }

  ngOnInit(): void {}

  setStockPrice(price) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock(stockForm) {
    console.log('Stock form', stockForm); 
    if (stockForm.valid) {
      console.log('Creating stock ', this.stock); 
    }
    else{
      console.error('Stock form is in an invalid state');
    }
  }

  // onSubmit() {
  //   this.stock = Object.assign({}, this.stockForm.value);
  //   console.log('Saving stock', this.stock);
  //   this.createStock(this.stockForm);
  //   }

  // get notablePeople(): FormArray{
  //   return this.stockForm.get('notablePeople') as FormArray;
  // }

  // addNotablePerson(){
  //   console.log("hii");
  //   this.notablePeople.push(this.fb.group({
  //     name:['',Validators.required],
  //     title:['',Validators.required]
  //   }))
  // }

  // removeNotablePerson(index: number){
  //   this.notablePeople.removeAt(index);
  // }

  // onSubmit() {
  //   this.stock = Object.assign({}, this.stockForm.value);
  //   console.log('Saving stock', this.stock);
  //   }

  // resetForm(){
  //   this.stockForm.reset();
  //   }
}
