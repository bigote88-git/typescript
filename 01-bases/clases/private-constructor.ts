(()=> {
    
    class DBConection{

        private static _instance:DBConection;

        private constructor(
            public databasename:string,
            public port:number
        ){}

        static getInstance():DBConection{
            if(!this._instance)
                this._instance = new DBConection('test', 5480);

            return this._instance;
        }
    }

    const postgresqlConx = DBConection.getInstance();
    const oracleConx = DBConection.getInstance();

})()