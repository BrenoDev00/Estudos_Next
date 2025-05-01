import { pool } from "./data-base.js";

export class BaseRepository {
  async insertInto(table, columns, values) {
    const poolConection = pool.connect();

    try {
      const flags = Array.from(new Array(columns.length).keys());

      const formatedFlags = flags.map((flag) => `$${flag + 1}`);

      const query = `INSERT INTO ${table} (${columns.join(
        ", "
      )}) VALUES (${formatedFlags.join(", ")})`;

      (await poolConection).query("BEGIN TRANSACTION");
      (await poolConection).query(query, values);
      (await poolConection).query("COMMIT");
    } catch (error) {
      (await poolConection).query("ROLLBACK");
      throw error;
    } finally {
      (await poolConection).release();
    }
  }
}
