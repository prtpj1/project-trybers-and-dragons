import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  static RangerInitial = 0;
  constructor(
    _name: string, 
    private _energyType: EnergyType = 'stamina',
  ) {
    super(_name);
    Ranger.RangerInitial += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.RangerInitial;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}