
// Los decoradores son funciones que se ejecutan en el momento de transpilacion del codigo
// Los factory decorators son funciones que retornan otras funciones
function printToConsole(constructor:Function){
    console.log(constructor);
}

function printToConsoleConditional(print:boolean = false):Function {
    return (print)? printToConsole: () => console.log('No hice nada');
    
}

function blockPrototype(constructor:Function){
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

function CheckValidPokemonId() {
    return function(target: any, propertyKey: string, descriptor:PropertyDescriptor){
        
        const originalFunction = descriptor.value;
        descriptor.value = (id:number) => { 
            if(id < 1 || id > 800)
                console.error('Id not valid')
            else
                originalFunction(id)
        }
    }
}

function readonly(isWritable:boolean = true):Function{
    return function(target: any, propertyKey: string){
        const descriptor: PropertyDescriptor = {
            get(){
                return 'Hey'
            },
            set( this, val ){
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable
                })
            }
        }

        return descriptor;
    }
}

@blockPrototype
@printToConsoleConditional()
export class Pokemon {
    
    @readonly()
    public apiUrl:string = ''

    constructor(
        public name:string
    ){}

    @CheckValidPokemonId()
    saveToDB(id:number){
        console.log(`Pokemon ${ id} saved to DB`);
    }
}