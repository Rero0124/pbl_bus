import express, { Router } from "express";
import convert from "xml-js";
import config from "../config";
import client from "../db";
import { QueryConfig } from "pg";

const router: Router = express.Router();

interface BusLocateDataType {
  busType: XmlParseDataType,
  congetion: XmlParseDataType,
  dataTm: XmlParseDataType,
  fullSectDist: XmlParseDataType,
  gpsX: XmlParseDataType,
  gpsY: XmlParseDataType,
  isFullFlag: XmlParseDataType,
  islastyn: XmlParseDataType,
  isrunyn: XmlParseDataType,
  lastStTm: XmlParseDataType,
  lastStnId: XmlParseDataType,
  nextStId: XmlParseDataType,
  nextStTm: XmlParseDataType,
  plainNo: XmlParseDataType,
  posX: XmlParseDataType,
  posY: XmlParseDataType,
  rtDist: XmlParseDataType,
  sectDist: XmlParseDataType,
  sectOrd: XmlParseDataType,
  sectionId: XmlParseDataType,
  stopFlag: XmlParseDataType,
  trnstnid: XmlParseDataType,
  vehId: XmlParseDataType
}

router.get('/bus/locate/:id', (req: CustomRequest<{id: string}, {}>, res: ExpressResponse) => {
  const url = config.API_URL.find(url => url.group === 'bus_pos')?.url;
  console.log(`${url}/getBusPosByRtid?serviceKey=${config.API_KEY}&busRouteId=${req.params.id}`)
  if(url) {
    fetch(`${url}/getBusPosByRtid?serviceKey=${config.API_KEY}&busRouteId=${req.params.id}`, {
      method: 'GET',
    }).then((res) => res.text()).then((data) => {
      const result = convert.xml2json(data, {
        compact: true,
        spaces: 4
      });
      const json: ApiDataType<BusLocateDataType> = JSON.parse(result);
    })
  }
})

export default router;