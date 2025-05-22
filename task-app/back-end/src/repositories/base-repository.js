import { pool } from "./data-base.js";
import camelCaseKeys from "camelcase-keys";

export class BaseRepository {
  async selectById(columns, table, id) {
    try {
      const query = `SELECT ${columns.join(", ")} FROM ${table} WHERE id = $1`;

      const result = (await pool.query(query, [id])).rows;

      return camelCaseKeys(result, { deep: true });
    } catch (error) {
      throw error;
    }
  }

  async selectOrderedBy(columns, table, conditionColumn, ascOrDesc) {
    try {
      const query = `SELECT ${columns.join(
        ", "
      )} FROM ${table} ORDER BY ${conditionColumn} ${ascOrDesc}`;

      const result = (await pool.query(query)).rows;

      return camelCaseKeys(result, { deep: true });
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

  async deleteFrom(table, id) {
    try {
      const query = `DELETE FROM ${table} WHERE id = $1`;

      return await pool.query(query, [id]);
    } catch (error) {
      throw error;
    }
  }
}
