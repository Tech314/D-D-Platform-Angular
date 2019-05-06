import { SpecialAbilities } from "./special-abilities.model";
import { Action } from "./action";
import { LegendaryAction } from "./legendary-action.model";

export class Monster {
    _id: string;
    index: number;
    name: string;
    size: string;
    type: string;
    subtype: string;
    alignment: string;
    armor_class: number;
    hit_points: number;
    hit_dice: string;
    speed: string;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    dexterity_save: number;
    constitution_save: number;
    wisdom_save: number;
    charisma_save:number;
    perception: number;
    stealth: number;
    damage_vulnerabilities: string;
    damage_resistance: string;
    damage_immunities: string;
    condition_immunities: string
    senses: string;
    languages: string;
    challenge_rating: string;
    special_abilities: SpecialAbilities[];
    actions: Action[];
    legendary_actions: LegendaryAction[];
    url: string;

    constructor(_id: string,index: number,name: string,size: string,type: string,subtype: string,
        alignment: string,armor_class: number,hit_points: number,hit_dice: string,speed: string,strength: number,
        dexterity: number,constitution: number,intelligence: number,wisdom: number,charisma: number,
        dexterity_save: number,constitution_save: number,wisdom_save: number,charisma_save:number,
        perception: number,stealth: number,damage_vulnerabilities: string,damage_resistance: string,
        damage_immunities: string,condition_immunities: string,senses: string,languages: string,
        challenge_rating: string,special_abilities: SpecialAbilities[],actions: Action[],
        legendary_actions: LegendaryAction[],url: string){
            this._id = _id;
            this.index=index;
            this.name=name;
            this.size=size;
            this.type=type;
            this.subtype=subtype;
            this.alignment=alignment;
            this.armor_class=armor_class;
            this.hit_points=hit_points;
            this.hit_dice=hit_dice;
            this.speed=speed;
            this.strength=strength;
            this.dexterity=dexterity;
            this.constitution=constitution;
            this.intelligence=intelligence;
            this.wisdom=wisdom;
            this.charisma=charisma;
            this.dexterity_save=dexterity_save;
            this.constitution_save=constitution_save;
            this.wisdom_save=wisdom_save;
            this.charisma_save=charisma_save;
            this.perception=perception;
            this.stealth=stealth;
            this.damage_vulnerabilities=damage_vulnerabilities;
            this.damage_resistance=damage_resistance;
            this.damage_immunities=damage_immunities;
            this.condition_immunities=condition_immunities;
            this.languages=languages;
            this.challenge_rating=challenge_rating;
            this.special_abilities=special_abilities;
            this.actions=actions;
            this.legendary_actions=legendary_actions;
            this.url=url;
        }
}