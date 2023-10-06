(()=> {

    type InternetObject = {
        title: string,
        url: string,
        domain: string,
        active: boolean,
        since: number
    }

    const compositeObjet:InternetObject = {
        title: 'my title',
        url: 'http://www.something.com',
        domain: '.com',
        active: true,
        since: 2000
       }

       const { title, url } = compositeObjet;
       console.log(title.toUpperCase(), url);

    const printObject = ( { since, ...resto}:InternetObject) => {

        console.log(since.toFixed(2));
    }

    printObject(compositeObjet);

    const stringArr:string[] = ['asdf', 'asdf2', 'asdf3'];

    const [ , value2, value3 ] = stringArr;
    console.log(value2);

})()