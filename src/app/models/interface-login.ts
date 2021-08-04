export interface LoginResponse {
  code: string;
  description: string;
  datetime: string;
  data: DataLogin[];
}

export interface DataLogin {
  levelApp: number;
  updatedAt: string;
  userName: string;
  lastUpdate: LastUpdate;
  idUser: string;
  priv: string;
  tokenSecExpiration: number;
  email: string;
  tokenDteExpiration: LastUpdate;
  flagAdvise: boolean;
  nameApp: string;
  accessToken: string;
  apiCounter: ApiCounter;
  username: string;
}

export interface ApiCounter {
  current: number;
  dailyUse: number;
  owner: number;
  licenceUse: string;
  aboutUses: string;
}

export interface LastUpdate {
  '$date': number;
}