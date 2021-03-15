import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators,} from '@angular/forms';
import { Stock } from 'src/app/model/stock';
import { MessageService } from 'src/app/services/message.service';
import { StockService } from 'src/app/services/stock.service';

//let counter = 1;

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.scss'],
  providers:[MessageService]
})
export class CreateStockComponent implements OnInit {

  //public nameControl = new FormControl();
  //public stockGroup: FormGroup;
  public confirmed = false;
  public message = null;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
  public stock: Stock;  

  constructor(private stockService:StockService){
      this.initializeStock();
  }

  initializeStock() { 
    this.stock = {
    name: '',
    code: '',
    price: 0, 
    previousPrice: 0, 
    exchange: 'NASDAQ', 
    favorite: false
    }; 
  }

  ngOnInit(): void {}

  createStock(stockForm) {     
    if (stockForm.valid) {
      this.stockService.createStock(this.stock)
      .subscribe((result:any) => {
        this.message = result.msg;
        this.initializeStock();
        //this.stock= new Stock('', '', 0, 0, 'NASDAQ');
      }, (err) => {
        this.message = err.msg;
      });      
    }
    else {
     console.error('Stock from is in an invalid state');
    }
  }
  
  setStockPrice(price) { 
    this.stock.price = price; 
    this.stock.previousPrice = price;
  }
  

  // onSubmit() {
  //   this.stock = Object.assign({},this.stockForm.value);
  //   console.log('Saving stock',this.stock);
  //   }
  // constructor(private fb:FormBuilder) {
  //   this.createForm();
  //   this.stock = new Stock('Test' +counter++,'TST',20,10,'ABC');
  // }
  

  // createForm(){
  //   this.stockForm = this.fb.group({
  //     name:[null,Validators.required],
  //     code:[null,[Validators.minLength(2),Validators.required]],
  //     price:[0,[Validators.required,Validators.min(0)]]
  //     //notablePeople: this.fb.array([])
  //   });
  // }

  // loadStockFromServer(){
  //   this.stock = new Stock('Test' +counter++,'TST',20,10,'ABC');
  //   let stockFormModel = Object.assign({},this.stockForm.value);
  //   delete stockFormModel.previousPrice;
  //   delete stockFormModel.favorite;
  //   this.stockForm.setValue(stockFormModel);
  // }

  // patchStockForm(){
  //   this.stock = new Stock('Test' +counter++,'TST',20,10,'ABC');
  //   this.stockForm.patchValue(this.stock);
  // }

  // resetForm(){
  //   this.stockForm.reset();
  // }
  // setStockPrice(price) {
  //   this.stock.price = price;
  //   this.stock.previousPrice = price;
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
 
}
