import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { Contenido } from '../interfaces/interface_datos';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  miarray:Contenido[] =[]; 
  arrayContenido:any[]=[];
 

etiqueta:string="";
dato:string="";



  miFormulario = new FormGroup({
    name: new FormControl('', [Validators.min(3)]),
    apellido: new FormControl('', [Validators.min(3)]),
    contenido: new FormControl(''),
    seleccionar: new FormControl('')
  })


  addPerson(miformulario:FormGroup): void {

    this.etiqueta= this.miFormulario.get('seleccionar')?.value;
    this.dato= this.miFormulario.get('contenido')?.value;

    console.log(this.etiqueta, this.dato)
  
    let miObjeto = {etiqueta:`${this.etiqueta}`, dato:`${this.dato}`};
  
    console.log(miObjeto);
    this.miarray.push(miObjeto);
    console.log(this.miarray);
  }

  removeItem(index:number): void{
    /* this.miarray.splice(index,1); */
    this.arrayContenido.splice(index,1);
  }



 generarHTML(arr:Contenido[]) {
  let resultado="";
    this.arrayContenido=[];
  
    for (const obj of arr) {
      if (obj.etiqueta === "p") {

        this.arrayContenido.push(`<p class="parrafo">${obj.dato}</p>`);
      } else if (obj.etiqueta === "h1") {
      
        this.arrayContenido.push(`<h1>${obj.dato}</h1>`);
      } else if (obj.etiqueta === "h2") {
      
        this.arrayContenido.push(`<h2>${obj.dato}</h2>`);
      }
      else if (obj.etiqueta === "img") {
      
        this.arrayContenido.push(`<img src="${obj.dato}">`);
      }
      else if (obj.etiqueta === "code") {
      
        this.arrayContenido.push(`${obj.dato}`);
      }
      
    }
    
    console.log(this.arrayContenido);
    return resultado;
  }

  mostrarConsole(){
    console.log("mostrar");
  }
  

}
