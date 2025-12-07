import { z } from "zod";
import { CATEGORIAS_PRODUCTOS } from "../types/producto.types";

export const productoCreateSchema = z.object({
    id: z.number(),
    nombre: z.string().min(3).max(100).trim(),
    descripcion: z.string().min(3).max(1000),
    categoria: z.enum(CATEGORIAS_PRODUCTOS),
    precio: z.number().positive().max(999.99),
    stock: z.number().int().nonnegative(),
    activo: z.boolean().optional().default(true),
});

export const productoUpdateSchema = productoCreateSchema.partial()