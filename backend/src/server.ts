import express from 'express';
import config from './config';
import client from './db';
import cors from 'cors';
import apiRouter from './router/api';
import { QueryConfig, QueryResult } from 'pg';

const app = express();

app.use(cors({
  origin: config.FRONT_END_URL,
  credentials: true
}))

app.use(express.json())

app.use('/api', apiRouter);

client.connect().then(() => {
  console.log('DB연결 성공');

  const keyQuery: QueryConfig = {
    text: 'select data_value from api_data where data_group = $1 and data_type = $2',
    values: ['base', 'key']
  };

  const urlQuery: QueryConfig = {
    text: 'select data_group, data_value from api_data where data_type = $1',
    values: ['url']
  };

  client.query(keyQuery).then((key: QueryResult<{data_value: string}>) => {
    config.API_KEY = key.rows[0].data_value;
  }).then(() => {
    client.query(urlQuery).then((urls: QueryResult<{data_group: string; data_value: string;}>) => {
      for(const url of urls.rows)
      config.API_URL.push({
        group: url.data_group,
        url: url.data_value
      })
    }).then(() => {
      console.log(config);
      app.listen(config.PORT, () => { console.log('서버 시작'); })
      client.end();
    });
  });
}).catch(() => {
  throw new Error('DB연결 실패')
})

