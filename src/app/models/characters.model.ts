export class Characters { 
    charId: number;
    charName: string;
    charLvl: number;
    charExp: number;
    equipment: string;
    items: string;
    skills: string;
    traits: string;
    stats: string;
    str: string;
    dex: string;
    con: string;
    int: string;
    wis: string;
    cha: string;
    attackSpells: string;

    constructor(charId: number, charName: string, charLvl: number, charExp: number, equipment: string,
        items: string,skills: string, traits: string, stats: string, str: string, dex: string, con: string, int: string,
        wis: string, cha: string, attackSpells: string){
        this.charId = charId;
        this.charName = charName;
        this.charLvl = charLvl;
        this.charExp = charExp;
        this.equipment = equipment;
        this.items = items;
        this.skills = skills;
        this.traits = traits;
        this.stats = stats;
        this.str = str;
        this.dex = dex;
        this.con = con;
        this.int = int;
        this.wis = wis;
        this.cha = cha;
        this.attackSpells = attackSpells;
    }
}