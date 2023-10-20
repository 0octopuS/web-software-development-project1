import {renderFile} from '../deps.js'
import * as shoplistService from '../services/shoplistService.js';

const responseDetails = {
  headers: {'Content-Type': 'text/html;charset=UTF-8'},
};


const redirectTo = (path) => {
  return new Response(`Redirecting to ${path}.`, {
    status: 303,
    headers: {
      'Location': path,
    },
  });
};

// GET request to /lists shows a form that can be used to add shopping lists,
// and a list of existing shopping lists. Only shopping lists that are active
// are shown (active as in the value of active in the database is true).
const showActiveList = async () => {
  const data = {
    active_shoplist: await shoplistService.getActiveShoppingList(),
  };
  return new Response(await renderFile('lists.eta', data), responseDetails);
};

const addList = async (request) => {
  const formData = await request.formData();
  const name = formData.get('name');

  await shoplistService.createList(name);
  return redirectTo('/lists');
};

const deactivateList = async (request) => {
  const url = new URL(request.url);
  const id = url.pathname.split('/')[2];
  await shoplistService.changeShoplistActive(id);
  return redirectTo('/lists');
};


export {showActiveList, addList, deactivateList, redirectTo}