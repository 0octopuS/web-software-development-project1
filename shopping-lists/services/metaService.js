import {executeQuery, sql} from '../database/database.js';

export const getTotalItems = async () => {
  let query = `SELECT COUNT(*) FROM shopping_list_items`;
  let response = await executeQuery(query);
  return response.rows;
  // return await sql`SELECT COUNT(*) FROM shopping_list_items`;
};

export const getTotalShoppingLists = async () => {
  let query = `SELECT COUNT(*) FROM shopping_lists`;
  let response = await executeQuery(query);
  return response.rows;
  // return await sql`SELECT COUNT(*) FROM shopping_lists`;
};