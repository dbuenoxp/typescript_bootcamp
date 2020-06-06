export class Pelicula{
    
  
    constructor(public nombre:string,
                public director:string, 
                public estreno:Date,
                public duracion:number,
                public familiar:boolean){
     
    }

    verpelicula(){
        
        let hora = Math.floor(this.duracion / 60);  
        let minuto = Math.floor(this.duracion % 60);
        let duracionconcat =  hora + ":" + minuto;  
        let respuesta:string;

        if(this.familiar){
            respuesta = `${this.nombre} fue dirigida por ${this.director} 
            tiene una duración de ${duracionconcat}, se entrenó en el año 
            ${this.estreno.getFullYear() + 1} y es apta para toda la familia`;
         }
         else{
            respuesta = `${this.nombre} fue dirigida por ${this.director} 
            tiene una duración de ${duracionconcat}, se entrenó en el año 
            ${this.estreno.getFullYear() + 1} y no es apta para toda la familia`;
         }
         console.log(respuesta);
    }
}