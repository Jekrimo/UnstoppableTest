import express, { Router } from 'express';
import {DomainsController,} from '../controllers/Controller';
const domainsrouter = Router();
const DomainController = new DomainsController();

domainsrouter.get('/', DomainController.get);


export = domainsrouter;
