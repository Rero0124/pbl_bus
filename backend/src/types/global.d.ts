declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PORT: string | null;
    readonly DB_HOST: string | null;
    readonly DB_PORT: string | null;
    readonly DB_DATABASE: string | null;
    readonly DB_USER: string | null;
    readonly DB_PASSWORD: string | null;
    readonly FRONT_END_URL: string | null;
  }
}

interface JsonData {
  [key: string]: any;
}

interface ApiUrlType {
  group: string;
  url: string;
}

interface Config {
  PORT: number;
  DB_HOST: string;
  DB_PORT: number;
  DB_DATABASE: string;
  DB_USER: string;
  DB_PASSWORD: string;
  FRONT_END_URL: string;
  API_KEY: string;
  API_URL: ApiUrlType[]
}

type ExpressRequest = import('express').Request;
type ExpressResponse = import('express').Response;

interface CustomRequest<ParamType, BodyType> extends ExpressRequest {
  readonly params: ParamType;
  readonly body: BodyType;
}

type XmlParseDataType = { _text: string };

interface ApiDataType<T> {
  ServiceResult: {
    comMsgHeader: {},
    msgHeader: { headerCd: XmlParseDataType, headerMsg: XmlParseDataType, itemCount: XmlParseDataType },
    msgBody: { itemList: Array<T> }
  }
}