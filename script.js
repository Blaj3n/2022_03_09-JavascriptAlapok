var a;
var a = "alma";
var tomb = [];

var kepEleresiut = [
  "kepek/kep1.jpg",
  "kepek/kep2.jpg",
  "kepek/kep3.jpg",
  "kepek/kep4.jpg",
];
var kepCim = [
  "Elképesztő vöröshold a fekete éjszakában",
  "gyönyörű tájkép",
  "panda hintalovon",
  "csodálatos vízesés",
];
var kepAr = [1234, 5678, 19101, 26666];

var kepeim = [
  {
    kepEleresiut: "kepek/kep1.jpg",
    kepCim: "Elképesztő vöröshold a fekete éjszakában",
    kepAr: 1234,
  },
  {
    kepEleresiut: "kepek/kep2.jpg",
    kepCim: "gyönyörű tájkép",
    kepAr: 5678,
  },
  {
    kepEleresiut: "kepek/kep3.jpg",
    kepCim: "panda hintalovon",
    kepAr: 19101,
  },
  {
    kepEleresiut: "kepek/kep4.jpg",
    kepCim: "csodálatos vízesés",
    kepAr: 26666,
  },
];
console.log(kepeim);

/*objektumok*/

var szemely = {
  nev: "Béla",
  kor: 12,
  nem: "férfi",
};

console.log(szemely);
szemely.szemSzin = "kék";
console.log(szemely);
szemely.nem = "nő";
console.log(szemely);

var szemely2 = {
  nev: "Bjuci",
  kor: 122,
  nem: "nő",
  szemSzin: "szürke",
};
console.log(szemely2);
/*Mennyi a képek átlagára?
var atlag = 0;
for (let index = 0; index < kepAr.length; index++) {
  osszeg = kepAr[index] + atlag;
}
var atlag = osszeg / kepAr.length;
console.log(atlag);

Van-e 10.000-nél drágább kép?
var i = 0;
while (i < kepAr.length && !(kepAr[i] > 10000)) {
  i++;
}
if (i < kepAr.length) {
  console.log("van");
} else {
  console.log("Nincs");
}

Melyik az a kép, amelyiknek a címe 20 karakternél hosszabb?
for (let index = 0; index < kepCim.length; index++) {
  if (kepCim[index].length >= 20) {
    console.log(kepCim[index]);
  }
}
*/

/*Mennyi a képek átlagára?*/
var atlgAr = atlagAr();

/*Van-e 10.000-nél drágább kép?*/
var tizneldragabb = tizezerneldragabb();


/*Melyik az a kép, amelyiknek a címe 20 karakternél hosszabb?*/
var husznalhosszabb = huszkarakternelhosszabb();

function atlagAr() {
  var osszeg = 0;
  for (let index = 0; index < kepeim.length; index++) {
    osszeg = kepeim[index].kepAr + osszeg;
  }
  var atlag = osszeg / kepeim.length;
  console.log(atlag);
}

function tizezerneldragabb() {
  var i = 0;
  while (i < kepeim.length && !(kepeim[i].kepAr > 10000)) {
    i++;
  }
  if (i < kepeim.length) {
    console.log("van");
  } else {
    console.log("Nincs");
  }
}

function huszkarakternelhosszabb() {
  for (let index = 0; index < kepeim.length; index++) {
    if (kepeim[index].kepCim.length >= 20) {
      console.log(kepeim[index]);
    }
  }
}
