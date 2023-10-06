(() => {

    
    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[string, string] = [batman,superman];
    const villano:[string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum heroForce {
        Aquaman = 10,
        Batman,
        Flash = 9,
        Superman,
    }
    
    const fuerzaFlash:heroForce = heroForce.Flash;
    const fuerzaSuperman:heroForce = heroForce.Superman;
    const fuerzaBatman:heroForce = heroForce.Batman;
    const fuerzaAcuaman:heroForce = heroForce.Aquaman;
  
    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  