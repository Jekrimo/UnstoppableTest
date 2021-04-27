import { Pool } from 'pg';

const pool = new Pool ({
    max: 20,
    //connectionString: 'postgres://root:newPassword@localhost:port/dbname',
    connectionString: 'postres://postgres:password@localhost:5432/test',
    idleTimeoutMillis: 30000
});

export default pool;
