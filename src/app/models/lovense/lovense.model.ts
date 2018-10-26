



export interface LovenseGetToysResponse {
  domain: Map<string, LovenseDomain>;
}

export interface LovenseDomain {
    deviceId: string;
    domain: string;
    httpPort: number;
    wsPort: number;
    httpsPort: number;
    wwsPort: number;
    platform: string;
    appVersion: string;
    toys: Map<string, LovenseToysId>;
}


export interface LovenseToysId {
    id: string;
    name: string;
    nickName: string;
}


