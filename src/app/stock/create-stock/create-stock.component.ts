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

  //public nameControl = new FormControl();
  //public stockGroup: FormGroup;
  public confirmed = false;
  //public message = null;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
  public stockForm: FormGroup;
  private stock: Stock;  

  constructor(private fb:FormBuilder) {
    this.createForm();
    this.stock = new Stock('Test' +counter++,'TST',20,10);
  }
  ngOnInit(): void {}

  createForm(){
    this.stockForm = this.fb.group({
      name:[null,Validators.required],
      code:[null,[Validators.minLength(2),Validators.required]],
      price:[0,[Validators.required,Validators.min(0)]]
    });
  }

  onSubmit() {
    this.stock = Object.assign({},this.stockForm.value);
    console.log('Saving stock',this.stock);
    }

  loadStockFromServer(){
    this.stock = new Stock('Test' +counter++,'TST',20,10);
    let stockFormModel = Object.assign({},this.stockForm.value);
    delete stockFormModel.previousPrice;
    delete stockFormModel.favorite;
    this.stockForm.setValue(stockFormModel);
  }

  patchStockForm(){
    this.stock = new Stock('Test' +counter++,'TST',20,10);
    this.stockForm.patchValue(this.stock);
  }

  resetForm(){
    this.stockForm.reset();
  }
  // setStockPrice(price) {
  //   this.stock.price = price;
  //   this.stock.previousPrice = price;
  // }

  // createStock(stockForm) {
  //   console.log('Stock form', stockForm); 
  //   if (stockForm.valid) {
  //     console.log('Creating stock ', this.stock); 
  //   }
  //   else{
  //     console.error('Stock form is in an invalid state');
  //   }
  // }

  

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
