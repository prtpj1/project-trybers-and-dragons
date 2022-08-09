import Race from './Race';

export default class Dwarf extends Race {
  static newDwarf = 0;
  constructor(
    _name: string,
    _dexterity: number,
    private _maxLifePoints = 80,
  ) {
    super(_name, _dexterity);
    Dwarf.newDwarf += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.newDwarf;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}