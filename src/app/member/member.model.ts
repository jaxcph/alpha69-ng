export interface Member {
    displayName: string;
    level: number;
    score: number;
    dob: Date;
    isModel: boolean;
    session?: StreamSession;
    created: Date;
 }

 export interface StreamSession {
    title: string;
    modelName: string;
    accessType:  ['public', 'member', 'level', 'onrequest'];
    minLevel?: number;
    usePpm: boolean;
    ppm?: StreamSessionPPM;
    useGoal: boolean;
    goal?: StreamSessionGoal;
    stream: StreamConnection;
    created: Date;
    modified?: Date;
}

export interface StreamSessionGoal {
    amount: number;
    left: number;
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
