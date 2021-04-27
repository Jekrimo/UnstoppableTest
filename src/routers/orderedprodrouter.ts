import express, { Router } from 'express';
import { OrderProductsController} from '../controllers/Controller';

const orderedrouter = Router();
const OrderedProductsController = new OrderProductsController();

orderedrouter.get('/', OrderedProductsController.get);


export = orderedrouter;
