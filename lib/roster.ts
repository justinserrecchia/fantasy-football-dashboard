import { pool } from "./db";

export async function getRosterIds() {
    const ids = await pool.query('SELECT sleeper_id FROM roster');
    return ids.rows.map((row) => row.sleeper_id);
}