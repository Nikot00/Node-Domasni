const studenti = [
    { ime: "Bojan", prosek: 7.5, grad: "Skopje" }, //[0] => {}
    { ime: "Pero", prosek: 8.3, grad: "Bitola" },
    { ime: "Janko", prosek: 6.9, grad: "Bitola" },
    { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
    { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
    { ime: "Vancho", prosek: 10, grad: "Tetovo" },
    { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
    { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
    { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
    { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
]

//1. Site studenti od Skopje cie ime zavrsuva na bukvata a i imaat prosek nad 7, podredeni po ime(rastecki-ascending)

const filteredData = studenti

     .filter(student => student.grad === "Skopje" && student.prosek > 7 && student.ime.slice(-1) === "a")  
     .sort((a, b) => a.ime.localeCompare(b.ime)) 



console.log(sortedData);

//2. Site studenti koi imaat prosek nad 9, ne se od Skopje, podredeni po prosek, no opagacki (descending)

const avgMoreThanNine = studenti
 .filter(s => s.grad !== "Skopje" &&s.prosek > 9 )
 .sort((a, b) => b.prosek - a.prosek)


console.log(avgMoreThanNine);


//3. Prvite 3 studenti koi immat iminja od 5 karakteri(bukvi), podredeni po prosek.
const firstThree = studenti
.filter( s => s.ime.length === 5)
.slice(0, 3)
.sort((a, b) => a.prosek - b.prosek)

console.log(firstThree);












//5. VKupen prosek na studenti ciesto ime zavrsuva na bukvata a, i posle toa isto taka na site ostanati

const sumOfNameEndsOnA = studenti
.filter(student => student.ime.slice(-1) === "a")
.reduce((acc, curr) => acc  + curr.prosek, 0) 

console.log(sumOfNameEndsOnA);

const sumOfAllOthers = studenti 
.filter(s => s.ime.slice(-1) !== "a")
.reduce((acc, curr) => acc + curr.prosek, 0)

console.log(sumOfAllOthers.toFixed(2));






