export interface Paradas {
  code: string;
  description: string;
  datetime: string;
  data: Datum2[];
}

export interface Datum2 {
  Arrive: Arrive[];
  StopInfo: StopInfo[];
  ExtraInfo: any[];
  Incident: Incident;
}

export interface Incident {
  ListaIncident: ListaIncident;
}

export interface ListaIncident {
  data: Datum[];
}

export interface Datum {
  title: string;
  guid: string;
  description: string;
  pubDate: string;
  rssFrom: string;
  rssTo: string;
  cause: string;
  effect: string;
  moreInfo: MoreInfo;
}

interface MoreInfo {
  '@url': string;
  '@type': string;
  '@length': string;
}

interface StopInfo {
  lines: Line[];
  stopId: string;
  stopName: string;
  geometry: Geometry;
  Direction: string;
}

interface Line {
  label: string;
  line: string;
  nameA: string;
  nameB: string;
  metersFromHeader: number;
  to: string;
  color: string;
  forecolor?: string;
}

export interface Arrive {
  line: string;
  stop: string;
  isHead: string;
  destination: string;
  deviation: number;
  bus: number;
  geometry: Geometry;
  estimateArrive: number;
  DistanceBus: number;
  positionTypeBus: string;
}

export interface Geometry {
  type: string;
  coordinates: any;
}