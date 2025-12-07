//importar todas funcionalidades de express
import express ,{Application,Request,Response} from 'express';
//importar todas funcionalidades de cors
import cors from 'cors';
//extraer todas funcionalidades de dotenv para variables globales
import dotenv from 'dotenv';
dotenv.config(); 
const PORT = process.env.PORT;
const app:Application=express();

//middlwares
//seguridad
app.use(cors());
//traducir las peticiones o respuestas del json
app.use(express.json());

//rutas
app.get('/health',(req: Request,res: Response)=>{
    res.json({
        status: 'ok',
        message: 'Servidor funcionando correctamente'
    })
})
app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})

export default app;