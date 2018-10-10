export interface Member {
    uid: string;
    email: string;
    displayName: string;
    level: number;
    score: number;
    photoUrl?: string;
    dob: Date;
    isModel: boolean;
   
    created: Date;
 }
