import { Component, OnInit } from '@angular/core';
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
arrayProvisional1:string="";



clasesCss:any[]=[
  {"clase":"parrafo", "etiqueta":"p", "nombre":"parrafo"},
  {"clase":"title-h1", "etiqueta":"h1", "nombre":"h1"},
  {"clase":"title-h2", "etiqueta":"h2", "nombre":"h2"},
  {"clase":"title-h3", "etiqueta":"h3", "nombre":"h3"},
  {"clase":"img", "etiqueta":"img", "nombre":"img"},
  {"clase":"code", "etiqueta":"Code", "nombre":"code"}
];


subconpresent:any[]=[
  {"present":true},
  {"present":false},
]



  miFormulario = new FormGroup({
    seccion: new FormControl(''),
    etiqueta: new FormControl(''),
    clase: new FormControl(''),
    contenido: new FormControl(''),
    url: new FormControl(''),
    codigo: new FormControl(''),
    selectsubcon: new FormControl(''),
      subconetiqueta: new FormControl(''),
      subconclase: new FormControl(''),
      subconcontenido: new FormControl(''),
      checkbox:new FormControl('')
    
  })

  addPerson(miformulario:FormGroup): void {

    this.seccion= this.miFormulario.get('seccion')?.value;
    this.etiqueta= this.miFormulario.get('etiqueta')?.value;
    this.clase= this.miFormulario.get('clase')?.value;
    this.contenido= this.miFormulario.get('contenido')?.value;
    this.url= this.miFormulario.get('url')?.value;
    this.codigo= this.miFormulario.get('codigo')?.value;
    
    this.subconetiqueta=this.miFormulario.get('subconetiqueta')?.value;
    this.subconclase=this.miFormulario.get('subconclase')?.value;
    this.subconcontenido=this.miFormulario.get('subconcontenido')?.value;

    console.log(this.etiqueta, this.contenido)

    
    let miObjeto = {

      seccion:`${this.seccion}`,
      etiqueta:`${this.etiqueta}`,
      clase:`${this.clase}`,
      contenido:`${this.contenido}`,
      url:`${this.url}`,
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



 generarHTML(arr:Contenido[]) {
  let resultado="";
    this.arrayContenido=[];
  
    for (const obj of arr) {

      let copia = {etiqueta:`<${obj.etiqueta} class='${obj.clase}'>${obj.contenido}</${obj.etiqueta}>`};
      this.ArrayEtiquetas.push(copia);
      console.log(obj.subcontenido)

    }
    
    console.log(this.ArrayEtiquetas);
    this.arrayProvisional1=JSON.stringify(this.ArrayEtiquetas);
    console.log(this.arrayProvisional1);
    
    return resultado;
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
  

  crearSubcontenido(formulario:FormGroup){
   if(formulario.get('subconcontenido')?.value=="" ||
   formulario.get('subconetiqueta')?.value==""
   ){

    console.log("no se han agregado datos");

   }else{
    this.subconetiqueta=this.miFormulario.get('subconetiqueta')?.value;
    this.subconclase=this.miFormulario.get('subconclase')?.value;
    this.subconcontenido=this.miFormulario.get('subconcontenido')?.value;

    let objectoSubcontenido ={
      etiqueta:`${this.subconetiqueta}`,
      clase:`${this.subconclase}`,
      contenido:`${this.subconcontenido}`,
    }

    this.arraysub.push(objectoSubcontenido);
    console.log(this.arraysub)
   }
  }
  
  

}
