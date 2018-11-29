export class Fruta {

    private _nombre: string;
    private _precio: number;
    private _calorias: number;
    private _colores: string[];
    private _oferta: boolean;
    private _imagen: string;

    constructor() {
        this._nombre = 'default';
        this._precio = 0;
        this._calorias = 0;
        this._colores = [];
        this._oferta = false;
        this._imagen = '';
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    public get precio(): number {
        return this._precio;
    }

    public set precio(value: number) {
        this._precio = value;
    }

    public get calorias(): number {
        return this._calorias;
    }

    public set calorias(value: number) {
        this._calorias = value;
    }

    public get colores(): string[] {
        return this._colores;
    }

    public set colores(value: string[]) {
        this._colores = value;
    }

    public get oferta(): boolean {
        return this._oferta;
    }

    public set oferta(value: boolean) {
        this._oferta = value;
    }

    public get imagen(): string {
        return this._imagen;
    }

    public set imagen(value: string) {
        this._imagen = value;
    }
}
