export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Длина имени должна быть в диапазоне 2-10 символов');
    }

    const types = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (!types.includes(type)) {
      throw new Error('Передан не подходящий тип');
    }

    this.name = name;
    this.type = type;
  }
}
