import express from 'express';
import config from './config';
import client from './db';
import cors from 'cors';
import apiRouter from './router/api';
import { QueryResult } from 'pg';

const app = express();

app.use(cors({
  origin: config.FRONT_END_URL,
  credentials: true
}))

app.use(express.json())

app.use('/api', apiRouter);

client.connect().then(() => {
  console.log('DB연결 성공');
  const selectApiConfig = 'select data_value from api_data where data_group = $1 and data_type = $2';
  client.query(selectApiConfig, ['base']).then((data: QueryResult<{data_value: string}>) => {
    config.API_KEY = data.rows[0].data_value;
  }).then(() => {
    client.end();
  })
}).catch(() => {
  throw new Error('DB연결 실패')
})

app.listen(config.PORT, () => { console.log('서버 시작'); })