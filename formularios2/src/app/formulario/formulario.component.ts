import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { ArrayEtiquetas, Contenido, Subcontenido } from '../interfaces/interface_datos';
import { SavebdService } from '../savebd.service';
import { HttpClient } from '@angular/common/http';





@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  constructor(public json: SavebdService, private http: HttpClient) { }

  ngOnInit(): void {
  }
  



  miarray:Contenido[] =[]; 
  arrayContenido:any[]=[];
  ArrayEtiquetas:ArrayEtiquetas[]=[];

  arrayAllTag:any[]=[];
  
  convertirObjeto:any;
  convertirObjetostring:string="";
 
seccion:string="";
etiqueta:string="";
clase:string="";
contenido:string="";
url:string="";
codigo:string="";


subcontenido:Subcontenido[]=[];
arraysub:Subcontenido[]=[];

subconetiqueta:string="";
subconclase:string="";
subconcontenido:string="";



arrayProvisional:string="";




clasesCss:any[]=[
  {"clase":"parrafo", "etiqueta":"p", "nombre":"parrafo"},
  {"clase":"title-h1", "etiqueta":"h1", "nombre":"h1"},
  {"clase":"title-h2", "etiqueta":"h2", "nombre":"h2"},
  {"clase":"title-h3", "etiqueta":"h3", "nombre":"h3"},
  {"clase":"", "etiqueta":"ul", "nombre":"ul"},
  {"clase":"", "etiqueta":"li", "nombre":"li"},
  {"clase":"img", "etiqueta":"img", "nombre":"img"},
  {"clase":"code", "etiqueta":"Code", "nombre":"code"}
];






  miFormulario = new FormGroup({
    seccion: new FormControl(''),
    etiqueta: new FormControl(''),
    clase: new FormControl(''),
    contenido: new FormControl(''),
    url: new FormControl(''),
    codigo: new FormControl(''),
    /* selectsubcon: new FormControl(''),
      subconetiqueta: new FormControl(''),
      subconclase: new FormControl(''),
      checkbox:new FormControl('') */
      subconcontenido: new FormControl(''),
    
  })

  addPerson(miformulario:FormGroup): void {

    this.seccion= this.miFormulario.get('seccion')?.value;
    this.etiqueta= this.miFormulario.get('etiqueta')?.value;
    this.clase= this.miFormulario.get('clase')?.value;
    this.contenido= this.miFormulario.get('contenido')?.value;
    this.url= this.miFormulario.get('url')?.value;
    this.codigo= this.miFormulario.get('codigo')?.value;
   /*  this.selectsubcon= this.miFormulario.get('selectsubcon')?.value;
    console.log(this.selectsubcon);
    
    this.subconetiqueta=this.miFormulario.get('subconetiqueta')?.value;
    this.subconclase=this.miFormulario.get('subconclase')?.value;*/
    this.subconcontenido=this.miFormulario.get('subconcontenido')?.value; 

    console.log(this.etiqueta, this.contenido)

    
    let miObjeto = {

      seccion:`${this.seccion}`,
      etiqueta:`${this.etiqueta}`,
      clase:`${this.clase}`,
      contenido:`${this.contenido}`,
      url:`${this.url}`,
   /*    selectsubcon:`${this.selectsubcon}`, */
      subcontenido:this.arraysub,
      codigo:`${this.codigo}`
      };
  
    console.log(miObjeto);
    this.miarray.push(miObjeto);
    console.log(this.miarray);
     this.arrayProvisional = JSON.stringify(this.miarray);
    console.log("este es el array provisionesal", this.arrayProvisional + `\n`);
  }

  removeItem(index:number): void{
    /* this.miarray.splice(index,1); */
    this.arrayContenido.splice(index,1);
  }

  removeItem2(index:number):void{
    this.miarray.splice(index,1);
  }


  /* aquie el metodo para generar las etiquetas */

 generarHTML(arr:Contenido[]) {
  let resultado="";
    this.arrayContenido=[];
  
    for (const obj of arr) {

      

      let copia = {etiqueta:`<${obj.etiqueta} class='${obj.clase}'>${obj.contenido}</${obj.etiqueta}>`};
      this.ArrayEtiquetas.push(copia);
      this.arrayAllTag.push(`<${obj.etiqueta} class='${obj.clase}'>${obj.contenido}</${obj.etiqueta}>`);


      console.log("arrayAlltag", this.arrayAllTag);
       this.convertirObjeto = {...this.arrayAllTag};
      console.log("convirtienrod", this.convertirObjeto);
      this.convertirObjetostring = JSON.stringify(this.convertirObjeto);
      console.log(this.convertirObjetostring);


    }
    

  }

  mostrarConsole(){
    console.log("mostrar");
  }



  consultarBD(){
    this.json.getJson("http://localhost:8081/mongo/api/usuarios").subscribe((res)=>{
      console.log(res);
    
    },
    error=>{
      console.log("hay un error")
    }
    )
  }
  

}
