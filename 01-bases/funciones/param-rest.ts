(()=> {
const multipleText = (principalText:string, ...anotherText:string[]) =>{

    console.log(`${principalText} ${anotherText.join(' ')}`);
}

multipleText('H', 'du', 'ran', 'go')

})()