import express, { Router } from 'express';
import {OrdersController,} from '../controllers/Controller';
const ordersrouter = Router();
const OrderController = new OrdersController();

ordersrouter.get('/', OrderController.get);


export = ordersrouter;
