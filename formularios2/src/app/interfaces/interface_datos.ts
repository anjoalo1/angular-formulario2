export interface Contenido {
    seccion:String
    etiqueta: String;
    clase:String;
    contenido: String;
    url?:String;
   /*  selectsubcon:String; */
    subcontenido?:Subcontenido[];
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