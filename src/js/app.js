import Magician from './magician';
import Daemon from './daemon';

const magician = new Magician();
magician.stone = true;
magician.attack = 100;
magician.distance = 2;
magician.attack;

const daemon = new Daemon();
daemon.stone = false;
// daemon.attack = 200;
// magician.distance = 3;
// daemon.attack;

console.log(magician);
// console.log(daemon);
