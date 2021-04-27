import express, { Router } from 'express';
import {CheckUndercharedUser,} from '../controllers/Controller';
const checkrouter = Router();
const checkunder = new CheckUndercharedUser();

checkrouter.get('/', checkunder.get);


export = checkrouter;
