import { pool } from "./data-base.js";

export class BaseRepository {
  async selectFrom(columns, table) {
    try {
      const query = `SELECT ${columns.join(", ")} FROM ${table}`;

      return (await pool.query(query)).rows;
    } catch (error) {
      throw error;
    }
  }

  async selectOrderedBy(columns, table, conditionColumn, ascOrDesc) {
    try {
      const query = `SELECT ${columns.join(
        ", "
      )} FROM ${table} ORDER BY ${conditionColumn} ${ascOrDesc}`;

      return (await pool.query(query)).rows;
    } catch (error) {
      throw error;
    }
  }

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
