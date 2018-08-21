import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Api } from '../../providers/api';
import 'rxjs/add/operator/map'
@Component({
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {
  private articulo: any;
  private cliente: any;
  private presupuesto: any;
  private menu: any;
  private total: any;
  private totalmenu: any;
  private settings: any;
  private art: any;
  private cp: any;
  private f: any;
  myForm: FormGroup;
  private proveedor: any;
  constructor(private api: Api) {

  }

  ngOnInit() { //al iniciar la vista

    this.api.get('proveedors').map(data => data.json()) //llamas a la funcion get que esta dentro del archivo api
      .subscribe(
        (data: any) => {
          this.proveedor = data; //si recibis datos guardas en tareas lo que recibiste
          console.log('este es proveedores' + this.proveedor)
        },
        err => console.log(err)
      );

    this.api.get('clientes').map(data => data.json()) //llamas a la funcion get que esta dentro del archivo api
      .subscribe(
        (data: any) => {
          this.cliente = data; //si recibis datos guardas en tareas lo que recibiste
          console.log('este es clientes' + this.cliente)
        },
        err => console.log(err)
      );
    this.api.get('menus').map(data => data.json()) //llamas a la funcion get que esta dentro del archivo api
      .subscribe(
        (data: any) => {
          this.menu = data; //si recibis datos guardas en tareas lo que recibiste
          console.log('este es menus' + this.menu)
        },
        err => console.log(err)
      );
    this.api.get('presupuestos').map(data => data.json()) //llamas a la funcion get que esta dentro del archivo api
      .subscribe(
        (data: any) => {
          this.presupuesto = data; //si recibis datos guardas en tareas lo que recibiste
          console.log('este es presupuesto' + this.presupuesto)
        },
        err => console.log(err)
      );

    this.api.get('articulos').map(data => data.json()) //llamas a la funcion get que esta dentro del archivo api
      .subscribe(
        (data: any) => {
          this.articulo = data; //si recibis datos guardas en tareas lo que recibiste
          console.log('este es articulo' + this.articulo)
        },
        err => console.log(err)
      );

  }
  ver() {
    var cantidad = parseFloat((<HTMLInputElement>document.getElementById("cantidad")).value);
    var precio = parseFloat((<HTMLInputElement>document.getElementById("precio")).value);
    this.total = (cantidad * precio);
    console.log(this.total);
  }


  sumar() {
    var cantidad = ((<HTMLInputElement>document.getElementById("ar")).value);
    var
      cantidad1 = parseFloat((<HTMLInputElement>document.getElementById("cantidad")).value);

    for (let b of this.articulo) {
      if (b.descripcion_articulo == cantidad) {
        console.log("Inicial", b.id_articulo)
        var aux = b.cantidad_articulo;
        var suma = aux + cantidad1;
        b.cantidad_articulo = suma;

        this.api.put('articulos/' + b.id_articulo, b).subscribe((data: any) => {
          console.log(data)
        })
      }
    }
  }

  calcularcostototal() {
    var costo = parseFloat((<HTMLInputElement>document.getElementById("cos")).value);
    var cantidad = parseFloat((<HTMLInputElement>document.getElementById("cantidad")).value);
    var totalm: any;
    totalm = costo * cantidad
    this.totalmenu = totalm;
    console.log(this.totalmenu);

  }
  guardarpresu() {
    var nombre = ((<HTMLInputElement>document.getElementById("cli")).value);
    var menu = ((<HTMLInputElement>document.getElementById("me")).value);
    var costo = parseFloat((<HTMLInputElement>document.getElementById("cos")).value);
    var cantidad = parseFloat((<HTMLInputElement>document.getElementById("cantidad")).value);
    var costototal = parseFloat((<HTMLInputElement>document.getElementById("tot")).value);
    var fecha = ((<HTMLInputElement>document.getElementById("fecha")).value);

    for (let a of this.cliente) {
      if (a.nombre_cliente == nombre) {
        var client = a.id_cliente
        var client2 = a.nombre_cliente
      }
    }
    for (let a of this.menu) {
      if (a.nombre_menu == menu) {
        var men = a.id_menu
        var men2 = a.nombre_menu
      }
    }
    for (let a of this.menu) {
      if (a.costo_menu == costo) {
        var cost = a.costo_menu
      }
    }
    this.cp = cantidad;
    this.f = fecha;

    var object = {
      "nombre_cliente": nombre,
      "id_menu": men,
      "id_cliente": client,
      "nombre_menu": menu,
      "costo_menu": cost,
      "cantidad_perso": this.cp,
      "fecha": fecha,
      "costo_total": this.totalmenu
    };
    console.log(object);
    this.api.post('api/presupuestos', object).subscribe(res => { console.log(res) });
  }
  private objetofiltrado = [];
  private sumadetotales = [];
  private totales = [];
  generar() {

    var fechadesde = ((<HTMLInputElement>document.getElementById("fecha2")).value);
    var fechahasta = ((<HTMLInputElement>document.getElementById("fecha3")).value);

    for (let a of this.presupuesto) {
      if (a.fecha >= fechadesde && a.fecha <= fechahasta) {
        this.objetofiltrado.push(a);// para agregar objetos al array
      }
    }
    for (let tota of this.objetofiltrado) {    // for para 
      if (tota.costo_total != 0) {      //distinto a 0 para que si o si se cumpla la condicion
        this.sumadetotales.push(tota.costo_total);    // Se guardan en el array sólo los valores del atributo total_venta de cada elemento
        this.totales = this.sumadetotales.reduce(function (a, b) { return parseInt(a) + parseInt(b); }); //sumatoria de los valores del array
      }
    }
    console.log("hola");
    console.log("objeto filtrado", this.objetofiltrado);
    console.log("objeto filtrado", this.totales);

    var sendData = {
      "template": { "shortid": "Sy9iA5DyG" }, "data": {
        "columns": [
          {
            "name": "Cliente"
          },
          {
            "name": "Menu"
          },
          {
            "name": "Cantidad de Personas"
          },
          {
            "name": "Costo Total"
          }
          ,
          {
            "name": "Fecha"
          }
        ],
        "rows": [
        ],
        "total": [
        ],
        "fecha": [
        ]
      }
    }
    this.api.get('presupuestos').map(data => data.json()) //llamas a la funcion get que esta dentro del archivo api
      .subscribe(
        (data: any) => {
          console.log(data);
          // var objetofiltrado = data; //si recibis datos guardas en tareas lo que recibiste
          for (let pre in this.objetofiltrado) {
            sendData.data.rows.push({
              "nombre": this.objetofiltrado[pre].cliente.nombre_cliente,
              "menu": this.objetofiltrado[pre].menu.nombre_menu,
              "cantidad": this.objetofiltrado[pre].cantidad_perso,
              "costo": this.objetofiltrado[pre].costo_total,
              "fechapre": this.objetofiltrado[pre].fecha

            })
          }
          sendData.data.total.push({
            "tt": "Total: " + this.totales
          })
          sendData.data.fecha.push({
            "fdesde": fechadesde,
            "fhasta": fechahasta

          })

          this.api.download(sendData).subscribe(res => {
            var file = new Blob([(<any>res)._body], { type: 'application/pdf;base64' });
            var URL = window.URL;
            var fileURL = URL.createObjectURL(file);
            window.open(fileURL);
            //  this.toastr.success('Informe ');
          }, err => {
            console.log('Error al obtener informe');
          });
        })

  }

}





