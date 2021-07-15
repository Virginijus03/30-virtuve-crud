const Kitchen = require('./Kitchen');

const donatoVirtuve = new Kitchen('Donato');

donatoVirtuve.intro();
// Sveiki atvyke i Donato virtuve!

//donatoVirtuve.isDidziosiosRaides('labas');

donatoVirtuve.nupirkta('mesa', 20);
donatoVirtuve.nupirkta('bulves', 50);
donatoVirtuve.nupirkta('grietine', 4);

donatoVirtuve.turimiProduktai();
// // 1) Mesa: 20
// // 2) Bulves: 50
// // 3) Grietine: 4

donatoVirtuve.sunaudota('mesa', 15);
donatoVirtuve.sunaudota('bulves', 15);
donatoVirtuve.sunaudota('grietine', 2);

donatoVirtuve.perekuras();
//tarpas
// Padaryk Donatai breika!
//tarpas

donatoVirtuve.turimiProduktai();
// 1) Mesa: 5
// 2) Bulves: 35
// 3) Grietine: 2

donatoVirtuve.sugedesProduktas('bulves');
// // KOMENTARAS: sugedusius produktus tiesiog ismetame

donatoVirtuve.perekuras();
//tarpas
// Padaryk Donatai breika!
//tarpas

donatoVirtuve.turimiProduktai();
// // 1) Mesa: 5
// // 2) Grietine: 2