import {Pool} from 'https://deno.land/x/postgres@v0.17.0/mod.ts';
import postgres from 'https://deno.land/x/postgresjs@v3.3.5/mod.js';

let sql;
const databaseUrl = Deno.env.get('DATABASE_URL');
if (databaseUrl) {
  sql = postgres(databaseUrl);
} else {
  sql = postgres({});
}
const CONCURRENT_CONNECTIONS = 2;
const connectionPool = new Pool(databaseUrl, CONCURRENT_CONNECTIONS);

const executeQuery = async (query) => {
  const response = {};
  let client;

  try {
    client = await connectionPool.connect();
    const result = await client.queryObject(query);
    if (result.rows) {
      response.rows = result.rows;
    }
  } catch (e) {
    response.error = e;
  } finally {
    try {
      await client.release();
    } catch (e) {
      console.log(e);
    }
  }

  return response;
};

export {executeQuery, sql};
