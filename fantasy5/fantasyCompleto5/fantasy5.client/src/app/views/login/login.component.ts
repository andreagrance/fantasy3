import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {User} from '../../providers/user';
import { NgModel } from '@angular/forms';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
myForm: FormGroup;
message:String;
constructor( public user: User, private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]]
    });
   }

doLogin(){
  if (this.myForm.valid) {
      var account: { email: string, password: string } = {
        email: this.myForm.value.email,
        password: this.myForm.value.password
      };
      this.user.login(account);
    } else {
      if (this.myForm.value.password.length < 4) {
        this.message= "Error, la contraseña debe tener mas de cuatro caracteres"
      }else{
       this.message= "Error, el email no es valido"
      }
    }
  }
}