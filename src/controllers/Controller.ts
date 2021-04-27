import pool from '../dbconfig/dbconnector';

class UsersController {

    public async get(req, res) {
        try {
            const client = await pool.connect();

            const sql = "SELECT * FROM users";
            const { rows } = await client.query(sql);
            const todos = rows;

            client.release();

            res.send(todos);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

class OrderProductsController {

    public async get(req, res) {
        try {
            const client = await pool.connect();

            const sql = "SELECT * FROM order_products";
            const { rows } = await client.query(sql);
            const todos = rows;

            client.release();

            res.send(todos);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

class OrdersController {

    public async get(req, res) {
        try {
            const client = await pool.connect();

            const sql = "SELECT * FROM orders";
            const { rows } = await client.query(sql);
            const todos = rows;

            client.release();

            res.send(todos);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

class DomainsController {

    public async get(req, res) {
        try {
            const client = await pool.connect();

            const sql = "SELECT * FROM domains";
            const { rows } = await client.query(sql);
            const todos = rows;

            client.release();

            res.send(todos);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

class ProductsController {

    public async get(req, res) {
        try {
            const client = await pool.connect();

            const sql = "SELECT * FROM products";
            const { rows } = await client.query(sql);
            const todos = rows;

            client.release();

            res.send(todos);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

export {UsersController, OrderProductsController, OrdersController, ProductsController, DomainsController}
