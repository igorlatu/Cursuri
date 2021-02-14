// semestrul 1
const matematica1 = [3, 6, 7, 5, 9];
const fizica1 = [9, 8, 2, 5, 10];
const informatica1 = [10, 10, 10, 10, 9, 8, 10];
const civica1 = [10, 10, 10, 10, 1, 1, 1];
// calculati media la fiecare obiect
// aflati care obiect are cea mai mare medie
// aflati care obiect are cea mai mica medie

// semestrul 2
const matematica2 = [6, 7, 4, 5, 9];
const fizica2 = [1, 8, 9, 9, 10];
const informatica2 = [1, 5, 5, 5, 9, 8, 10];
const civica2 = [10, 10, 10, 10, 9];
// calculati media la fiecare obiect
// aflati care obiect are cea mai mare medie
// aflati care obiect are cea mai mica medie

// aflati care semestru a fost cu medie mai mare
// aflati care semestru a fost cu media mai mica
// calculati media anuala

// Semestrul 1 (Suma)
let sumaMatematica1 = 0;
let sumaFizica1 = 0;
let sumaInformatica1 = 0;
let sumaCivica1 = 0;

matematica1.forEach(function parcurge(value) {
  sumaMatematica1 = sumaMatematica1 + value;
});
fizica1.forEach(function (value) {
  sumaFizica1 = sumaFizica1 + value;
});
informatica1.forEach(function (value) {
  sumaInformatica1 = sumaInformatica1 + value;
});
civica1.forEach(function (value) {
  sumaCivica1 = sumaCivica1 + value;
});

// Semestrul 2 (suma)
let sumaMatematica2 = 0;
let sumaFizica2 = 0;
let sumaInformatica2 = 0;
let sumaCivica2 = 0;

matematica2.forEach(function parcurge(value) {
  sumaMatematica2 = sumaMatematica2 + value;
});
fizica2.forEach(function (value) {
  sumaFizica2 = sumaFizica2 + value;
});
informatica2.forEach(function (value) {
  sumaInformatica2 = sumaInformatica2 + value;
});
civica2.forEach(function (value) {
  sumaCivica2 = sumaCivica2 + value;
});
// Media ambele semestre
let mediaMatematica1 = sumaMatematica1 / matematica1.length
let mediaFizica1 = sumaFizica1 / fizica1.length
let mediaInformatica1 = sumaInformatica1 / informatica1.length
let mediaCivica1 = sumaCivica1 / civica1.length
let mediaMatematica2 = sumaMatematica2 / matematica2.length
let mediaFizica2 = sumaFizica2 / fizica2.length
let mediaInformatica2 = sumaInformatica2 / informatica2.length
let mediaCivica2 = sumaCivica2 / civica2.length

// Media anuala si media pe simestru
const mediaFinalaSemestrul1 = (mediaMatematica1 + mediaFizica1 + mediaInformatica1 + mediaCivica1) / 4;

const mediaFinalaSemestrul2 = (mediaMatematica2 + mediaFizica2 + mediaInformatica2 + mediaCivica2) / 4;

const mediaFinala = (mediaFinalaSemestrul1 + mediaFinalaSemestrul2) / 2;


// Cel mai mare si cel mai mic
console.log('Cea mai mare medie din Semestrul I ' + Math.max(mediaMatematica1, mediaFizica1, mediaInformatica1, mediaCivica1).toFixed(2));
console.log('Cea mai mica medie din Semestrul I ' + Math.min(mediaMatematica1, mediaFizica1, mediaInformatica1, mediaCivica1).toFixed(2));

console.log('Cea mai mare medie din Semestrul II ' + Math.max(mediaMatematica2, mediaFizica2, mediaInformatica2, mediaCivica2).toFixed(2));
console.log('Cea mai mica medie din Semestrul II ' + Math.min(mediaMatematica2, mediaFizica2, mediaInformatica2, mediaCivica2).toFixed(2));

console.log('Ceam mai mare medie semestriala ' + Math.max(mediaFinalaSemestrul1, mediaFinalaSemestrul2).toFixed(2))
console.log('Ceam mai mica medie semestriala ' + Math.min(mediaFinalaSemestrul1, mediaFinalaSemestrul2).toFixed(2))

const ceaMaiMareMedieObiectSem2 = Math.max(matematicaMedia2, fizicaMedia2, informaticaMedia2, civicaMedia2);

if (ceaMaiMareMedieObiectSem2 === matematicaMedia2) {
  console.log('Matematica ze best 2');
} else if (ceaMaiMareMedieObiectSem2 === fizicaMedia2) {
  console.log('Fizica ze best 2');
} else if (ceaMaiMareMedieObiectSem2 === informaticaMedia2) {
  console.log('Informatica ze best 2');
} else {
  console.log('Civica ze best 2');
}

if (mediaSem1 > mediaSem2) {
  console.log('semstrul 1 e mai bun');
} else {
  console.log('semstrul 2 e mai bun');
} 