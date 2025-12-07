export const CATEGORIAS_PRODUCTOS =[
    'frutas',
    'verduras',
    'lacteos',
    'carnes',
]

export type CategoriasProductos = typeof CATEGORIAS_PRODUCTOS[number];

export interface Productos{
    id:number;
    nombre:string;
    descripcion:string;
    categoria: string[];
    precio:number;
    stock:number;
    activo:boolean;
    fechaCreacion:Date;
    fechaActualizacion:Date;
}