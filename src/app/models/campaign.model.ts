export class Campaign { 
    campId: number;
    campName: string;
    campPass: string;
    char1: number;
    char2: number;
    char3: number;
    char4: number;
    char5: number;
    char6: number;

    constructor(campId: number, campName: string, campPass: string, char1: number,
        char2: number,char3: number,char4: number,char5: number,char6: number){
            this.campId = campId;
            this.campName = campName;
            this.campPass = campPass;
            this.char1 = char1;
            this.char2 = char2;
            this.char3 = char3;
            this.char4 = char4;
            this.char5 = char5;
            this.char6 = char6;

    }
}