import Race from './Race';

export default class Halfling extends Race {
  static newHalfling = 0;
  constructor(
    _name: string,
    _dexterity: number,
    private _maxLifePoints = 60,
  ) {
    super(_name, _dexterity);
    Halfling.newHalfling += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.newHalfling;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}