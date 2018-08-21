import { Component,ViewChild,ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { Api } from '../../providers/api';
import 'rxjs/add/operator/map'
@Component({
  templateUrl: 'proveedor.component.html',
})


export class ProveedorComponent {
  myForm: FormGroup;
  message:String;
  constructor( public api: Api , private formBuilder: FormBuilder) {
      this.myForm = formBuilder.group({
        idproveedor: ['', [Validators.required]],
        nombre: ['', [Validators.required]]
      });
     }

  doLogin(){
    if (this.myForm.valid) {
        var account: { idproveedor:string , nombre: string } = {
          idproveedor: this.myForm.value.idproveedor,
          nombre: this.myForm.value.nombre
        };
      } else {
         this.message= "Error, el email no es valido"
        }
      }
    
    
    }
  

 




  


