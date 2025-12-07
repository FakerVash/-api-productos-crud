import {z} from "zod";
import dotenv from "dotenv";
//cargar variables de entorno(.env)

dotenv.config();

const envSchema = z.object({
    PORT: z.string().default('3000').transform(val => parseInt(val,10)),
    CORS: z.string().default('*'),

    // base de datos
    DB_HOST: z.string().default('localhost'),
    DB_PORT: z.string().default('3306').transform(val => parseInt(val,10)),
    DB_NAME: z.string().default('productos.db'),
    DB_USER: z.string().default('root'),
    DB_PASSWORD: z.string().default(''), // la pieza que faltaba
});
export const env = envSchema.parse(process.env);