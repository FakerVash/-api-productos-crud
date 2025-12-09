export const CATEGORIAS = ['frutas', 'verduras', 'lacteos', 'carnes', 'panaderia', 'bebidas', 'otros'] as const;
export type CategoriaProducto = typeof CATEGORIAS[number];

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: CategoriaProducto;
  precio: number;
  stock: number;
  activo: boolean;
  createdAt: Date;
  updatedAt: Date;
}