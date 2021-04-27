CREATE TABLE order_products
(
    id integer NOT NULL,
    order_id integer  NOT NULL,
    product_id integer NOT NULL,
    price integer NOT NULL,
    returned_at Date
)

CREATE TABLE users
(
    id integer NOT NULL,
    email string  NOT NULL,
    store_credits_balance integer NOT NULL,
    created_at Date
)
