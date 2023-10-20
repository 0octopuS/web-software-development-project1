import {executeQuery, sql} from '../database/database.js';

// CREATE TABLE shopping_list_items (
//     id SERIAL PRIMARY KEY,
//     shopping_list_id INTEGER REFERENCES shopping_lists(id),
//     name TEXT NOT NULL,
//     collected BOOLEAN DEFAULT FALSE
//   );


const getFromShoplistID = async (id) => {
  let query = `SELECT * FROM shopping_list_items WHERE shopping_list_id=${
      id} ORDER BY collected,name`;
  let response = await executeQuery(query);
  return response.rows;
};

const createItem = async (shid, name) => {
  let query =
      `INSERT INTO shopping_list_items (shopping_list_id,name) VALUES (${
          shid},'${name}')`;
  let response = await executeQuery(query);
  return response.rows;
};

const changeItemComplete = async (item_id) => {
  let query =
      `UPDATE shopping_list_items SET collected=TRUE WHERE id=${item_id}`;
  await executeQuery(query);
};


export {getFromShoplistID, createItem, changeItemComplete};