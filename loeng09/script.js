function valjastaRuut(arv) {
    console.log(arv * arv);
}

valjastaRuut(10);
valjastaRuut(3);
valjastaRuut(4);

function korruta(arv1, arv2) {
    return arv1 * arv2;
}

let korrutis1 = korruta(2, 3);
let korrutis2 = korruta(25, 1000);
console.log(korrutis1, korrutis2);

console.log('---')
let varvid = ['sinine', 'must', 'valge'];
varvid.push('roheline');
varvid.sort(() => 0.5 - Math.random());
varvid.splice(varvid.indexOf('must'), 1);

for (let i = 0; i < varvid.length; i++) {
    console.log(varvid[i]);
}
console.log('---')
let numbrid = [10, 3, 4];
for (let i = 0; i < numbrid.length; i++) {
    valjastaRuut(numbrid[i]);
}
console.log('---')
let matk1 = {
    nimi: 'Rabamatk 1',
    pikkus: 3,
    algusPunkt: 'Parkla',
    kirjeldus: 'Lorem ipsum',
};
let matk2 = {
    nimi: 'Rabamatk 2',
    pikkus: 13,
    algusPunkt: 'Järv',
    kirjeldus: 'Tere',
};
let matk3 = {
    nimi: 'Rabamatk 3',
    pikkus: 0.3,
    algusPunkt: 'Puu',
    kirjeldus: 'Mingi asi',
};
let matkad = [matk1, matk2, matk3];
console.log(matkad);
for (let i = 0; i < matkad.length; i++) {
    console.log(matkad[i].pikkus)
}























