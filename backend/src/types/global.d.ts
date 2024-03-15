declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PORT: string | null;
    readonly DB_HOST: string | null;
    readonly DB_PORT: string | null;
    readonly DB_DATABASE: string | null;
    readonly DB_USER: string | null;
    readonly DB_PASSWORD: string | null;
  }
}

interface JsonData {
  [key: string]: any;
}

interface Config {
  PORT: number;
  DB_HOST: string;
  DB_PORT: number;
  DB_DATABASE: string;
  DB_USER: string;
  DB_PASSWORD: string;
}

