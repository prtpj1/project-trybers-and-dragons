import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  static WarriorInitial = 0;
  constructor(
    _name: string, 
    private _energyType: EnergyType = 'stamina',
  ) {
    super(_name);
    Warrior.WarriorInitial += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.WarriorInitial;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}