import { Component,Output, EventEmitter } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface Country {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-shop-add-edit',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, 
            MatSelectModule, ReactiveFormsModule,],
  templateUrl: './shop-add-edit.component.html',
  styleUrl: './shop-add-edit.component.css',
  providers: [provideNativeDateAdapter()],
})

export class ShopAddEditComponent {

  @Output() clickEvent = new EventEmitter<string[]>();

  shopForm: FormGroup;  

  countries: Country[] = [
    {value: 'india-91', viewValue: 'India'},
    {value: 'usa-1', viewValue: 'USA'},
    {value: 'china-86', viewValue: 'China'},
    {value: 'nepal-977', viewValue: 'Nepal'},
  ];

  constructor(private _fb: FormBuilder, private dialog: MatDialog) {
    this.shopForm = this._fb.group ({
      sNo: 0,
      shopName: '',
      shopId: '',
      shopDetails: '',
      contactNo: '',
      estd: '',
      country: ''
    });
  };

  shopArr: any[] = [];

  onFormSubmit() {
    if(this.shopForm.valid) {
      this.shopArr.push(this.shopForm.value);
      this.clickEvent.emit(this.shopArr);
      //localStorage.setItem('myData',JSON.stringify(this.shopForm.value));
      //const shopData = JSON.parse(localStorage.getItem('myData') as string);
      //this.shopArr = shopData;
      //console.log(this.shopArr);

    }
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
