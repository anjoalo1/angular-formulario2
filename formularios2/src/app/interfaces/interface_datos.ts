export interface Contenido {
    seccion:String
    etiqueta: String;
    clase:String;
    contenido: String;
    url?:String;
   /*  selectsubcon:String; */
    codigo?:String;
  
  }

  export interface Subcontenido{
    etiqueta: String;
    clase:String;
    contenido: String;
  }

  export interface ArrayEtiquetas{
    etiqueta:string;
  }

  export interface objetoFinal{
    seccion:string,
    contenido:string[];
  }