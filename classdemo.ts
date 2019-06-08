export class classDemo
{
    username: string;
    password: string;
    ssn:number;

    constructor(ssn:number){
        this.ssn=ssn;
    }

    getUserName(username:string)
    {
        return this.username=username;

    }

    setUserName(){

        this.username ="hello";

    }

    getSSN(){

        return this.ssn;
    }
}

