import dotenv from 'dotenv';
import path from 'path';

interface ENV {
  PORT: number | null;
  DB_HOST: string | null;
  DB_PORT: number | null;
  DB_DATABASE: string | null;
  DB_USER: string | null;
  DB_PASSWORD: string | null;
  FRONT_END_URL: string | null;
}

dotenv.config();

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: path.join(__dirname, '../.env.production'), override: true })
} else if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: path.join(__dirname, '../.env.development'), override: true })
} else {
  throw new Error('process.env.NODE_ENV를 설정하지 않았습니다!')
}



const getConfig = (): Config => {
  const env: ENV = {
    PORT: isNaN(Number(process.env.PORT)) ? Number(process.env.PORT) : null,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: isNaN(Number(process.env.DB_PORT)) ? Number(process.env.DB_PORT) : null,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    FRONT_END_URL: process.env.FRONT_END_URL
  };

  const data: JsonData = {};

  for (const [key, value] of Object.entries(env)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
    data[key] = value;
  }

  return data as Config;
}

const config = getConfig();

export default config;