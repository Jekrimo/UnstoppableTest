import express, { Router } from 'express';
import {CheckUsersDomainsController} from '../controllers/Controller';
import {User} from '../migrations/interfaces';
import Server from '../server';
const userrouter = Router();
const GetUserController = new CheckUsersDomainsController();
const allusers = userrouter.get('/', GetUserController.get)
// console.log(totalusers)
export {allusers};
