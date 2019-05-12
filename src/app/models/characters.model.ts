export class Characters { 
    charId: number;
    charName: string;
    charLvl: number;
    charExp: number;
<<<<<<< HEAD
=======
    charRace: string;
>>>>>>> 65022ebe8bfad45fa986fd3c64a5cc10310c1383
    charClass: string;
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
<<<<<<< HEAD
        wis: string, cha: string, attackSpells: string, charClass: string){
=======
        wis: string, cha: string, attackSpells: string, charRace: string, charClass: string){
>>>>>>> 65022ebe8bfad45fa986fd3c64a5cc10310c1383
        this.charId = charId;
        this.charName = charName;
        this.charLvl = charLvl;
        this.charExp = charExp;
        this.charClass = charClass;
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
        this.charRace = charRace;
        this.charClass = charClass;
    }
}