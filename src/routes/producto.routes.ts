import { Router } from 'express';
import * as productoController from '../controllers/producto.controller';

const router = Router();

router.get('/', productoController.listarProductos);
router.get('/:id', productoController.obtenerProducto);
router.post('/', productoController.crearProducto);

export default router;