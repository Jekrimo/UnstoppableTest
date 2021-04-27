import express, { Application, Router } from 'express';
import bodyParser from 'body-parser';
import allusers from './routers/UnstoppableRouter';
import orderedrouter from './routers/orderedprodrouter';
import productsrouter from './routers/productsRouter';
import domainsrouter from './routers/domainsRouter';
import ordersrouter from './routers/ordersRouter';
import pool from './dbconfig/dbconnector';

class Server {
    private app;

    constructor() {
        this.app = express();
        this.config();
        this.routerConfig();
        this.dbConnect();
    }

    private config() {
        this.app.use(bodyParser.urlencoded({ extended:true }));
        this.app.use(bodyParser.json({ limit: '1mb' })); // 100kb default
    }

    private dbConnect() {
        pool.connect(function (err, client, done) {
            if (err) throw new Error(err);
            console.log('Connected');
          });
    }

    private routerConfig() {
        this.app.use('/ordered', orderedrouter)
        this.app.use('/users', allusers)
        this.app.use('/products', productsrouter)
        this.app.use('/domains', domainsrouter)
        this.app.use('/orders', ordersrouter)
    }

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app.listen(port, () => {
                resolve(port);
            }).on('error', (err: Object) => reject(err));
        });
    }
}

export default Server;
