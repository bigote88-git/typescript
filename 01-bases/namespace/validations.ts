
// sirve para agrupar codigo como los paquetes en java
namespace Validations {

    export const validateText = (text: string):boolean => {
        return (text.length > 3);
    }

    export const validateDate = (myDate: Date):boolean => {
        return (isNaN(myDate.valueOf()))
    }
}

console.log( Validations.validateText('Fer'))