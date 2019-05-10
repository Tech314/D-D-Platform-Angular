export class SpecialAbilities{
    attack_bonus: number;
    desc: string;
    name: string;

    constructor(attack_bonus:number,desc:string,name:string){
        this.attack_bonus=attack_bonus;
        this.desc=desc;
        this.name=name;
    }
}