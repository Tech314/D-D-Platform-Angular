export class Action{
    attack_bonus:number;
    desc:string;
    name:string;
    damage_bonus:number;
    damage_dice:string;
    
    constructor(attack_bonus:number,desc:string,name:string,damage_bonus:number,damage_dice:string){
        this.attack_bonus=attack_bonus;
        this.desc=desc;
        this.name=name;
        this.damage_bonus=damage_bonus;
        this.damage_dice=damage_dice;
    }
}