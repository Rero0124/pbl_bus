import express from 'express';
import config from './config';
import client from './db';
import cors from 'cors';
import apiRouter from './router/api';

const app = express();

app.use(cors({
  origin: config.FRONT_END_URL,
  credentials: true
}))
app.use(express.json())

app.use('/api', apiRouter);

client.connect().then(() => {
  console.log('DB연결 성공');
  app.listen(config.PORT, () => { console.log('서버 시작'); })
}).catch(() => {
  throw new Error('DB연결 실패')
})