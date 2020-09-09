import { Component, VERSION } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  managedPayee:FormGroup;
  
  formControls:any;
  constructor(){

  }
  ngOnInit(){
   // this.formControls = 
    this.managedPayee = new FormGroup({
      accountNumber : new FormControl(),
      cnfAccountNumber : new FormControl(),
      zipcode : new FormControl(),
    });
  }
}
