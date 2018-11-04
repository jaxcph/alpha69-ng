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
    tip_from: number;
    tip_to: number;
    value: number;
    seconds: number;
}

export interface LovensenToyEvent {
    id: string; // document id;
    sid: number; // session id
    did: string; // toy device id
    act: string;
    val: number;
    secs: number;
    nme: string; // from username
    uid: string;
    amt: number; // amount tipped, optional
    ts: number; // us timestamp form server firebase.database['ServerValue']['TIMESTAMP']
}


