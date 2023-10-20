import * as itemControllers from './controllers/itemControllers.js'
import * as metaControllers from './controllers/metaControllers.js'
import * as shoplistControllers from './controllers/shoplistControllers.js'
import {configure, serve} from './deps.js';

configure({
  views: `${Deno.cwd()}/views/`,
});

const handleRequest = async (request) => {
  const url = new URL(request.url);
  if (url.pathname === '/') {
    return await metaControllers.getMetadata();
  } else if (url.pathname === '/lists' && request.method === 'GET') {
    return await shoplistControllers.showActiveList();
  } else if (url.pathname === '/lists' && request.method === 'POST') {
    return await shoplistControllers.addList(request);
  } else if (url.pathname.match(/^\/lists\/(\d+)\/deactivate$/) !== null) {
    return await shoplistControllers.deactivateList(request);
  } else if (
      url.pathname.match(/^\/lists\/(\d+)$/) !== null &&
      request.method === 'GET') {
    return await itemControllers.showItems(request);
  } else if (
      url.pathname.match(/^\/lists\/(\d+)\/items$/) !== null &&
      request.method === 'POST') {
    return await itemControllers.addItems(request);
  } else if (
      url.pathname.match(/^\/lists\/(\d+)\/items\/(\d+)\/collect$/) !== null &&
      request.method === 'POST') {
    return await itemControllers.markItemComplete(request);
  } else {
    return new Response('Not found', {status: 404});
  }
  // } else if (url.pathname === '/tasks' && request.method === 'POST') {
  //   return await taskController.addTask(request);
  // } else if (url.pathname === '/tasks' && request.method === 'GET') {
  //   return await taskController.viewTasks(request);
  // } else {
  //   return new Response('Not found', {status: 404});
  // }
  // return shoplistControllers.redirectTo('/lists');
};


serve(handleRequest, {port: 7777});
