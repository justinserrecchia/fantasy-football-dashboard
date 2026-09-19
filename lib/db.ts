import { Pool } from 'pg';

export const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'fantasy_dashboard',
    user: 'postgres',
    password: process.env.DB_PASSWORD,
});