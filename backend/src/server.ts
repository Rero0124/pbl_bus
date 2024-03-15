import express from 'express';
import config from './config';
import client from './db';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: config.FRONT_END_URL,
  credentials: true
}))

client.connect().then(() => {
  console.log('DB연결 성공');
  app.listen(config.PORT, () => { console.log('서버 시작'); })
}).catch(() => {
  throw new Error('DB연결 실패')
})