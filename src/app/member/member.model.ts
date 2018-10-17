export interface Member {
    displayName: string;
    level: number;
    isModel: boolean;
    model?: Model;
    session?: StreamSession;
    agreeMember: boolean;
    agree18yo: boolean;
    created: Date;
 }

 export interface Model {
     realname: string;
     dob: Date;
     agreeModel: boolean;
 }

 export interface StreamSession {
    title: string;
    modelName: string;
    accessType:  ['public', 'member', 'level', 'onrequest'];
    minLevel?: number;
    usePpm: boolean;
    ppm?: StreamSessionPPM;
    useGoal: boolean;
    // goal?: StreamSessionGoal;
    stream: StreamConnection;
    created: Date;
    modified?: Date;
    agreedStream: boolean;
}

export interface StreamSessionGoal {
    amount: number;
    collected: number;
    descr: string;
    doneFx: string;
}

export interface StreamSessionPPM {
    amount: number;
}

export interface StreamConnection {
    url: string;
    key: string;
}

export interface Tipjar {
    balance: number;
}

export interface Wallet {
    balance: number;
}
