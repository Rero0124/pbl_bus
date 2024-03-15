import { Client } from 'pg';
import config from './config';

const client = new Client({
  user: config.DB_USER,
  host: config.DB_HOST,
  database: config.DB_DATABASE,
  password: config.DB_PASSWORD,
  port: config.DB_PORT
})

export default client;