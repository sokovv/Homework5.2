import Character from './Character';

class Bowman extends Character {
  constructor(name, type) {
    if (type !== 'Bowman') {
      throw new Error('Ошибка. Допускаются только персонаж типа: Bowman');
    }
    super(name, type);
    this.attack = 25;
    this.defence = 25;
  }
}

export default Bowman;
