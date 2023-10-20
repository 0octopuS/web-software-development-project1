import {renderFile, serve} from '../deps.js'
import * as metaService from '../services/metaService.js';

const responseDetails = {
  headers: {'Content-Type': 'text/html;charset=UTF-8'},
};

export const getMetadata = async () => {
  const totalShoppingLists = await metaService.getTotalShoppingLists();
  const totalItems = await metaService.getTotalItems();
  const data = {
    totalShoppingLists: totalShoppingLists[0].count,
    totalItems: totalItems[0].count,
  };
  return new Response(await renderFile('meta.eta', data), responseDetails);
};