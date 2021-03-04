import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Stock } from 'src/app/model/stock';

let counter = 1;

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.scss']
})
export class CreateStockComponent implements OnInit {
  private stock:Stock;
  public stockForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    code: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    notablePeople: this.fb.array([])
    });

  get notablePeople(): FormArray{
    return this.stockForm.get('notablePeople') as FormArray;
  }
  
  addNotablePerson(){
    console.log("hii");
    this.notablePeople.push(this.fb.group({
      name:['',Validators.required],
      title:['',Validators.required]
    }))
  }

  removeNotablePerson(index: number){
    this.notablePeople.removeAt(index);
  }

  constructor(private fb : FormBuilder) { 
    this.createForm();
  }

  createForm(){
    this.stockForm = this.fb.group({
      name: [null, Validators.required],
      code: [null, [Validators.required, Validators.minLength(2)]], 
      price: [0, [Validators.required, Validators.min(0)]],
      notablePeople: this.fb.array([])
      });
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.stock = Object.assign({}, this.stockForm.value);
    console.log('Saving stock', this.stock);
    }
  
  resetForm(){
    this.stockForm.reset();
    }
  
  
}
