export class Usuario {

    private _id: number;  
    private _nombre: string;  
    private _password: string;

    constructor(){
        this._id = -1;
        this._nombre = "";
        this._password = "";
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    public get password(): string {
        return this._password;
    }

    public set password(value: string) {
        this._password = value;
    }

}