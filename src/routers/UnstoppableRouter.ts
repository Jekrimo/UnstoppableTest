import express, { Router } from 'express';
import {UsersController,} from '../controllers/Controller';
const userrouter = Router();
const GetUserController = new UsersController();

const allusers = userrouter.get('/', GetUserController.get, function name(req, res) {
  console.log(res, 'something')
});

export = allusers;
