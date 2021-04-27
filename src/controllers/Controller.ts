import pool from '../dbconfig/dbconnector';


class Gettheinfo {

}
// class UsersController {
//
//     public async get(req, res) {
//
//         try {
//             const client = await pool.connect();
//
//             const sql = "SELECT * FROM users";
//             const { rows } = await client.query(sql);
//             const users = rows;
//             // ^users is my info, how I get it out so I can compare agains user domain registry
//             client.release();
//
//             res.send(users);
//         } catch (error) {
//             res.status(400).send(error);
//         }
//     }
// }

class CheckUsersDomainsController {

    public async get(req, res) {

        try {
            const client = await pool.connect();

            const sql = `INSERT INTO public.domains (owner_user_id),
            SELECT b.id
            FROM
            public.domains a
            INNER JOIN public.users b ON b.id = a.owner_user_id
            INNER JOIN public.orders c ON c.user_id = b.id
            WHERE c.user_id = b.id AND b.id != a.owner_user_id
            GROUP BY b.id`;
            const { rows } = await client.query(sql);
            const updatedUserID = rows;
            client.release();

            res.send(updatedUserID);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

class CheckUndercharedUser {

    public async get(req, res) {

        try {
            const client = await pool.connect();

            const sql = `INSERT INTO public.orders (payment_status)(
                          SELECT c.id
                          FROM public.products a
                          INNER JOIN public.order_products b ON b.product_id = a.id
                          INNER JOIN public.orders c ON c.id = b.order_id
                          INNER JOIN public.users d ON c.user_id = d.id
                          Where a.id = b.product_id AND c.payment_amount < a.price)`;
            const { rows } = await client.query(sql);
            const checkedundercharged = rows;
            client.release();

            res.send(checkedundercharged);
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

export { CheckUsersDomainsController, CheckUndercharedUser, OrdersController, ProductsController, DomainsController}
