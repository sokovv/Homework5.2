import Character from '../Character';
import Bowman from '../Bowman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Undead from '../Undead';
import Daemon from '../Daemon';
import Zombie from '../Zombie';

test('Верный  Bowman', () => {
    const received = new Bowman('Valera', 'Bowman');
    const expected = {
        name: 'Valera',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(received).toEqual(expected);
});

test('Верный  Swordsman', () => {
    const received = new Swordsman('Valera', 'Swordsman');
    const expected = {
        name: 'Valera',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };
    expect(received).toEqual(expected);
});

test('Верный  Magician', () => {
    const received = new Magician('Valera', 'Magician');
    const expected = {
        name: 'Valera',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    expect(received).toEqual(expected);
});


test('Верный Undead', () => {
    const received = new Undead('Valera', 'Undead');
    const expected = {
        name: 'Valera',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };
    expect(received).toEqual(expected);
});


test('Верный Daemon', () => {
    const received = new Daemon('Valera', 'Daemon');
    const expected = {
        name: 'Valera',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };
    expect(received).toEqual(expected);
});



test('Верный  Zombie', () => {
    const received = new Zombie('Valera', 'Zombie');
    const expected = {
        name: 'Valera',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };
    expect(received).toEqual(expected);
});


test('Неверное имя', () => {
    const received = () => new Character('М', 'Bowman');
    expect(received).toThrow();
});

test('Неверный тип Bowman', () => {
    const received = () => new Bowman('Valera', 'Arhimag');
    expect(received).toThrow();
});

test('Неверный тип Daemon', () => {
    const received = () => new Daemon('Valera', 'Arhimag');
    expect(received).toThrow();
});

test('Неверный тип Magician', () => {
    const received = () => new Magician('Valera', 'Arhimag');
    expect(received).toThrow();
});

test('Неверный тип Swordsman', () => {
    const received = () => new Swordsman('Valera', 'Arhimag');
    expect(received).toThrow();
});

test('Неверный тип Undead', () => {
    const received = () => new Undead('Valera', 'Arhimag');
    expect(received).toThrow();
});

test('Неверный тип Zombie', () => {
    const received = () => new Zombie('Valera', 'Arhimag');
    expect(received).toThrow();
});

test('Метод levelUp', () => {
    const received = new Bowman('Valera', 'Bowman');
    received.levelUp()
    const expected = {
        level: 2,
        health: 100,
        attack: 30,
        defence: 30,
        name: 'Valera',
        type: 'Bowman',
    };
    expect(received).toEqual(expected);
});

test('Здоровье 0 levelUp', () => {
    const received = () => {
        const rec = new Bowman('Valera', 'Bowman');
        rec.health = 0;
        return rec.levelUp()
    }
    expect(received).toThrow();
});

test('Метод damage', () => {
    const received = new Bowman('Valera', 'Bowman');
    received.damage(10)
    const expected = {
        level: 1,
        health: 92.5,
        attack: 25,
        defence: 25,
        name: 'Valera',
        type: 'Bowman',
    };
    expect(received).toEqual(expected);
});

test('Здоровье 0 damage', () => {
    const received = () => {
        const rec = new Bowman('Valera', 'Bowman');
        rec.health = 0;
        return rec.damage(10)
    }
    expect(received).toThrow();
});