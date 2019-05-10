export class Campaign {
    campaignId: number;
    campaignName: string;
    campaignPass: string;
    char1: number;
    char2: number;
    char3: number;
    char4: number;
    char5: number;
    char6: number;

    constructor(campaignId:number,campaignName:string,campaignPass:string,char1:number,
        char2:number,char3:number,char4:number,char5:number,char6:number) {
            this.campaignId = campaignId;
            this.campaignName = campaignName;
            this.campaignPass = campaignPass;
            this.char1 = char1;
            this.char2 = char2;
            this.char3 = char3;
            this.char4 = char4;
            this.char5 = char5;
            this.char6 = char6;
    }
}