import {renderFile, serve} from '../deps.js'
import * as itemService from '../services/itemService.js';
import * as shoplistService from '../services/shoplistService.js';

import {redirectTo} from './shoplistControllers.js';

const responseDetails = {
  headers: {'Content-Type': 'text/html;charset=UTF-8'},
};


const showItems = async (request) => {
  const url = new URL(request.url);
  const id = url.pathname.split('/')[2];
  const shoppingListall = await shoplistService.getListbyID(id);
  const data = {
    items: await itemService.getFromShoplistID(id),
    shoppingList: shoppingListall[0],
  };
  return new Response(await renderFile('item.eta', data), responseDetails);
};

const addItems = async (request) => {
  const formData = await request.formData();
  const name = formData.get('name');
  const url = new URL(request.url);
  const shoplist_id = url.pathname.split('/')[2];

  await itemService.createItem(shoplist_id, name);
  return await redirectTo(`/lists/${shoplist_id}`);
};

const markItemComplete = async (request) => {
  const url = new URL(request.url);
  const url_list = url.pathname.split('/');
  const shoplist_id = url_list[2];
  const item_id = url_list[4];
  await itemService.changeItemComplete(item_id);
  return await redirectTo(`/lists/${shoplist_id}`);
};
export {showItems, addItems, markItemComplete};