declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PORT: string | null;
    readonly DB_HOST: string | null;
    readonly DB_PORT: string | null;
    readonly DB_DATABASE: string | null;
    readonly DB_USER: string | null;
    readonly DB_PASSWORD: string | null;
    readonly API_KEY_DATA_GO_KR: string | null;
    readonly FRONT_END_URL: string | null;
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
  API_KEY_DATA_GO_KR: string;
  FRONT_END_URL: string;
}

type ExpressRequest = import('express').Request;
type ExpressResponse = import('express').Response;

interface CustomRequest<ParamType, BodyType> extends ExpressRequest {
  readonly param: ParamType;
  readonly body: BodyType;
}