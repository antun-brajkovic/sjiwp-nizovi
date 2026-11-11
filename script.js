var names = ["John", "Jane", "Bob", "Mike"];

// 1. Pomoću petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza.
for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// 2. Dodajte svoje ime na kraj niza.
names.push("Antun");

// 3. Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon išto ispišete "Jane" izađite iz petlje.
for(let a = { i: 0, flg: true }; a.i < names.length && a.flg === true; a.i++) {
    console.log(names[a.i]);
    if(names[a.i] === "Jane") {
        a.flg = false;
    }
}

// 4. Napišite naredbu za uklanjanje undefined vrijednosti iz niza.
let tmp = [];
for(let i = 0; i < names.length; i++) {
    if(names[i] !== undefined) {
        tmp.push(names[i]);
    }
}

// console.log(names); // debug info