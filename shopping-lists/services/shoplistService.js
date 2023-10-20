import {executeQuery, sql} from '../database/database.js';



const getActiveShoppingList = async () => {
  let query = `SELECT * FROM shopping_lists WHERE active=True`;
  let response = await executeQuery(query);
  return response.rows;
  // return await sql`SELECT * FROM shopping_lists WHERE active=True`;
};

const createList = async (name) => {
  let query = `INSERT INTO shopping_lists (name) VALUES ('${name}')`;
  let response = await executeQuery(query);
  return response.rows;
  // await sql`INSERT INTO shopping_lists (name) VALUES (${name})`;
};

const getListbyID = async (id) => {
  let query = `SELECT * FROM shopping_lists WHERE id=${id}`;
  let response = await executeQuery(query);
  return response.rows;
  // return await sql`SELECT * FROM shopping_lists WHERE id=${id}`;
};

const changeShoplistActive = async (id) => {
  let query = `UPDATE shopping_lists set active=False WHERE id=${id}`;
  await executeQuery(query);
  // await sql`UPDATE shopping_lists set active=False WHERE id=${id}`;
};

export {getActiveShoppingList, createList, getListbyID, changeShoplistActive}