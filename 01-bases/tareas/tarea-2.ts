// Funciones Básicas
function sumar( a:number, b:number ):number{
    return a + b;
  }
  
  const contar = ( heroes:string[] ) => {
    return heroes.length;
  }
  const superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
  contar(superHeroes);
  
  //Parametros por defecto
  const llamarBatman = ( llamar:boolean = false):void => {
    if( llamar ){
      console.log("Batiseñal activada");
    }
  }
  
  llamarBatman();
  
  // Rest?
  const unirheroes = ( ...personas:string[] ) => {
    return personas.join(", ");
  }
  
  
  // Tipo funcion
  const noHaceNada:Function = ( numero:number, texto:string, booleano:boolean, arreglo:[] ):void=> {}
  
  // Crear el tipo de funcion que acepte la funcion "noHaceNada"
  let noHaceNadaTampoco:Function;
  noHaceNadaTampoco = noHaceNada
  