import { Sequelize } from "sequelize";
import { env }  from './env';
import { logger } from './logger';
export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: env.DB_HOST,
    port: env.DB_PORT,
    database: env.DB_NAME,
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    pool:{
        max: 5,
        min: 0,
        acquire:30000,
        idle: 10000,
    },
    logging: (message) => logger.info(message),

})
    
export async function connectDatabase(): Promise<void>{
    try{
        await sequelize.authenticate()
        logger.info('Base de datos conectada')
    }catch(error){
        logger.error('Error al conectar a la base de datos ${error}')
    }
}