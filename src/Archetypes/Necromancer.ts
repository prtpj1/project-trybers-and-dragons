import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  static NecromancerInitial = 0;
  constructor(
    _name: string, 
    private _energyType: EnergyType = 'mana',
  ) {
    super(_name);
    Necromancer.NecromancerInitial += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.NecromancerInitial;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}