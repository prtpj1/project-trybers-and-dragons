import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  static mageInitial = 0;
  constructor(
    _name: string, 
    private _energyType: EnergyType = 'mana',
  ) {
    super(_name);
    Mage.mageInitial += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.mageInitial;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}