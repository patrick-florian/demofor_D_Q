import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from '../folder_validators/username.validatiors';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {

  // Variables
  dummyLogin = false;

  contactMethods = [
    { id: '1' , method: 'Phone'},
    { id: '2' , method: 'Email'},
    { id: '3' , method: 'Text'},
    { id: '4' , method: 'Carrier Pidgeon'}
  ];

  contactTimes = [
    { id: '1' , time: 'AM'},
    { id: '2' , time: 'PM'},
    { id: '3' , time: 'Never'}
  ];

  // Initialize form into a variable
  form = new FormGroup({
    username: new FormControl('',
      [Validators.required, UsernameValidators.cannotContainSpace],
      UsernameValidators.shouldBeUnique),
    password: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit() {
  }

  get username() {
    return this.form.get('username');
  }

  login() {
    if (this.form.invalid === false) {
      this.dummyLogin = true;
    } else {
      this.dummyLogin = false;
    }
  }

  log(x) {
    console.log(x);
  }

  submitCF(form) {
    console.log(form);
    console.dir(form.value.comment);
    console.dir(form.value.contact.firstName);
    this.form.reset();
  }

}
