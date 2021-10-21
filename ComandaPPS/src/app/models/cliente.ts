export interface Cliente {
    uid?: string;
    password: string;
    email : string;
    nombre : string;
    apellido? : string;
    dni? : number;
    foto? : string;
    listaEspera ?: boolean;
    habilitado: boolean;
}
