import express, { Router } from 'express';
import {ProductsController} from '../controllers/Controller';
const productsrouter = Router();
const ProductController = new ProductsController();

productsrouter.get('/', ProductController.get);


export = productsrouter;
