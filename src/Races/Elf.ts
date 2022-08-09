import Race from './Race';

export default class Elf extends Race {
  static newElf = 0;
  constructor(
    _name: string,
    _dexterity: number,
    private _maxLifePoints = 99,
  ) {
    super(_name, _dexterity);
    Elf.newElf += 1;
  }

  static createdRacesInstances(): number {
    return Elf.newElf;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}