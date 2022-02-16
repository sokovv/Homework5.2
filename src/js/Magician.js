import Character from './Character';

class Magician extends Character {
  constructor(name, type) {
    if (type !== 'Magician') {
      throw new Error('Ошибка. Допускаются только персонаж типа: Magician');
    }
    super(name, type);
    this.attack = 10;
    this.defence = 40;
  }
}

export default Magician;
