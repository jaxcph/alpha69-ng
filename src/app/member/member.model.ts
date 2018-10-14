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
    accessType:  ['public', 'member', 'level', 'onrequest'];
    minLevel?: number;
    ppmUse: boolean;
    ppmAmount: number;
    goal?: StreamSessionGoal;
    isStreaming: boolean;
    created: Date;

}

export interface StreamSessionGoal {
    amount: number;
    left: number;
    descr: string;
    doneFx: string;
}
