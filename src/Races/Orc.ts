import Race from './Race';

export default class Orc extends Race {
  static newOrc = 0;
  constructor(
    _name: string,
    _dexterity: number,
    private _maxLifePoints = 74,
  ) {
    super(_name, _dexterity);
    Orc.newOrc += 1;
  }

  static createdRacesInstances(): number {
    return Orc.newOrc;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}