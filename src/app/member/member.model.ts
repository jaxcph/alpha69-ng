export interface Member {
    id: string;
    displayName: string;
    level: number;
    isModel: boolean;
    model?: Model;
    session?: StreamSession;
    agreeMember: boolean;
    agree18yo: boolean;
    created: Date;
    blocked?: string[];
 }

 export interface Model {
     realname: string;
     dob: Date;
     agreeModel: boolean;
     avatarImg?: string;
     listingImg?: string;
     subtitle?: string;
     aboutMe?: string;

 }

 export interface StreamSession {
    id: number;
    title: string;
    modelName: string;
    accessType: string; // ['public', 'member', 'level', 'onrequest'];
    minLevel?: number;
    usePpm: boolean;
    ppm?: StreamSessionPPM;
    useGoal: boolean;
    minTipAmount: number;
    stream: StreamConnection;
    created: Date;
    modified?: Date;
    agreedStream: boolean;
}

export interface Tipper {
    amt: number;
    nme: string;
}

export interface StreamSessionGoal {
    amount: number;
    collected: number;
    descr: string;
    doneFx: string;
    tippers?: Tipper[];
}

export interface StreamSessionPPM {
    amount: number;
}

export interface StreamConnection {
    url: string;
    key: string;
}

/*export interface BlockedMember {
    nme: string;
    why?: string;
    dt: Date;

}*/


export interface Tipjar {
    balance: number;
    tippers?: Tipper[];
}

export interface Wallet {
    balance: number;
}
