import express from 'express';
import config from './config';
import client from './db';

const app = express();

client.connect().then(() => {
  console.log('DB연결 성공');
  app.listen(config.PORT, () => { console.log('서버 시작'); })
}).catch(() => {
  throw new Error('DB연결 실패')
})