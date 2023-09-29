import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { ArrayEtiquetas, Contenido, Subcontenido, objetoFinal } from '../interfaces/interface_datos';
import { SavebdService } from '../savebd.service';
import { HttpClient } from '@angular/common/http';
import { clasesCss, tagPadre, tag2Form } from './arraysEtiquetas';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit{


  constructor(public json: SavebdService, private http: HttpClient) { }

  ngOnInit(): void {}
 

  miarray:Contenido[] =[]; 
  arrayContenido:any[]=[];
  ArrayEtiquetas:ArrayEtiquetas[]=[];

  arrayAllTag:any[]=[];
  arrayAllTag3:any[]=[];
  
  convertirObjeto:any;
  convertirObjetostring:string="";

  objetoFinal1:objetoFinal={seccion:"",
contenido:[]
};
 
seccion:string="";
etiqueta:string="";
clase:string="";
contenido:string="";
url:string="";
codigo:string="";

apertura:string="&lt;";
cierre:string="&gt;"


subcontenido:Subcontenido[]=[];
arraysub:Subcontenido[]=[];

subconetiqueta:string="";
subconclase:string="";
subconcontenido:string="";


/* varialbe para guardar JSON. stringify*/
arrayProvisional:string="";


clasesCss =clasesCss;


  miFormulario = new FormGroup({
    seccion: new FormControl(''),
    etiqueta: new FormControl(''),
    clase: new FormControl(''),
    contenido: new FormControl(''),
    url: new FormControl(''),
    codigo: new FormControl(''),
    subconcontenido: new FormControl(''),
  })

  addPerson(miformulario:FormGroup): void {


    this.miarray.push(this.miFormulario.value);
    console.log("array desde miformulario.value", this.miarray);
    console.log(this.miarray);
    this.generarHTML(this.miarray);
  }

  removeItem2(index:number):void{
    this.miarray.splice(index,1);
  }


  /* aquie el metodo para generar las etiquetas */

 generarHTML(arr:Contenido[]) {
  let resultado="";
    this.arrayAllTag=[];
    this.convertirObjetostring=""
    this.convertirObjeto="";
    for (const obj of arr) {
  
      if(obj.etiqueta=="Code"){
        
        this.arrayAllTag.push(`<${obj.etiqueta} class='${obj.clase}'>${obj.codigo}</${obj.etiqueta}>`);
      }else if(obj.etiqueta=="img"){
        
        this.arrayAllTag.push(`<${obj.etiqueta} class='${obj.clase}'>${obj.url}</${obj.etiqueta}>`);
      }else
      {
        this.arrayAllTag.push(`<${obj.etiqueta} class='${obj.clase}'>${obj.contenido}</${obj.etiqueta}>`);
        
      }


      console.log("arrayAlltag", this.arrayAllTag);
      console.log("array unidos", this.arrayAllTag.join(''));
    /*    this.convertirObjeto = {...this.arrayAllTag};
       console.log(this.convertirObjeto);

       
      console.log("convirtienrod", this.convertirObjeto);
      this.convertirObjetostring = JSON.stringify(this.convertirObjeto); */
      /* console.log(this.convertirObjetostring); */


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





/* aquqqi va el segundo formulario o */
/*  */
/*  */
/*  */
tagPadre = tagPadre;
tag2Form = tag2Form;


etiquetaPadre:string="";
  etiqueta2:string="";
  clase2:string="";
  contenido2:string="";
  contenidoUnido:string="";

  formulario2Array:any[]=[];
  arrayTag2:any[]=[];

  miFormulario2 = new FormGroup({
    etiquetaPadre:new FormControl(''),
    etiquetaPadreClase:new FormControl(''),
    etiqueta: new FormControl(''),
    clase: new FormControl(''),
    contenido: new FormControl('')
  })

  subcontenido2(formulario:FormGroup):void{
   /*  this.seccion2 = this.miFormulario2.get('')?.value; */
   console.log(this.miFormulario2.value);
   /* this.formulario2Array.push(this.miFormulario2.value);
   console.log("formulario2", this.formulario2Array); */

  const etiquetas = this.miFormulario2.value;
  this.formulario2Array.push(etiquetas);

  console.log(this.formulario2Array);

 
   /* const  array2 = ["<li>hola mundo</li>"];
   const objeto1: { [key: string]: any } =   {"0":"<p class='parrafo'>asfasfa parrafo</p>","1":"<p class='parrafo'>asfasfa parrafo</p>","2":"<p class='parrafo'>asfasfa parrafo</p>"};
   objeto1["subcontenido"] = array2;
   console.log(objeto1);
 */

   
  }


  crearHtml(array:any){





   
    const apertura = array[0].etiquetaPadre;
    const cierre = array[0].etiquetaPadre;
    const classPadre = array[1].etiquetaPadreClase;

    const tagApertura =`<${apertura} class='${classPadre}'>`;
    const tagCierre =`</${apertura}>`;
    console.log("0", tagApertura, "1", tagCierre);
   

    for(const obj of array){

      let etiqueta = `<${obj.etiqueta}>${obj.contenido}</${obj.etiqueta}>`;
      this.arrayTag2.push(etiqueta);
    }

    const arrayConEtiquetas =[...this.arrayTag2];
    const unirEtiquetas = arrayConEtiquetas.join("");
    let armado = {"clase":'', "codigo":'', "contenido":unirEtiquetas,
    "etiqueta":tagApertura, "seccion":'', "subcontenido":'', "url":''
    } 
       this.miarray.push(armado); 

    this.arrayTag2.unshift(tagApertura);
    this.arrayTag2.push(tagCierre);
    console.log(this.arrayTag2);

    //this.arrayAllTag3 = this.arrayAllTag.concat(this.arrayTag2);
    //console.log("concatenando los dos array", this.arrayAllTag3);

    this.contenidoUnido=this.arrayTag2.join("\n");
    console.log(this.contenidoUnido);

/*     let armado = {"clase":"", "codigo":"", "contenido":this.contenidoUnido,
  "etiqueta":tagApertura, "seccion":"", "subcontenido":"", "url":""
  } 
     this.miarray.push(armado);  */
    
    // this.convertirObjeto["subcontenido"]=this.arrayTag2;
    //console.log(this.convertirObjeto);
   /*  this.convertirObjetostring["subcontenido"]=this.arrayTag2 */
   //console.log(JSON.stringify(this.convertirObjeto));

  }

  unir2Arrays(array:any, array2:any): void{
    this.arrayAllTag3 = array.concat(array2);
    console.log("los dos arrays unidos", this.arrayAllTag3);
    this.objetoFinal1 = {
      "seccion":"cuar",
      contenido:this.arrayAllTag3
    }
    console.log(this.objetoFinal1);
  }
  






}







