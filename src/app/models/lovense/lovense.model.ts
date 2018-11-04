export interface LovenseToy {
    did: string;
    sid: number;
    name: string;
    nickName: string;
    status: number;

    domain: string;
    httpPort: number;
    wsPort: number;
    httpsPort: number;
    wwsPort: number;
    platform: string;
    appVersion: string;
    commands: LovenseToyCommand[];
    image: string;

}

export interface LovenseToyCommand {
    action: string;
    value_min: number;
    value_max: number;
}
export interface LovenseToyCommandRule {
    uid: string;
    did: string;
    id: number;
    action: string;
    tip: number;
    value: number;
    seconds: number;
}




