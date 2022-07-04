const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Sors-moi la liste des titres des livres du CDI
books.forEach(element => console.log(element['title']));


// Est-ce que tous les livres ont été empruntés au moins une fois ?
let allBorrowedBooks = true;
books.forEach(element => {
    if (element['rented'] == 0){
        allBorrowedBooks = false;
    } 
});
allBorrowedBooks ? (console.log("Tous les livres ont été empruntés.")) : (console.log("Tous les livres n'ont pas été empruntés."));


// Quel est le livre le plus emprunté ?
let mostBorrowedBook;
for(let index in books) {
    if (index == 0) mostBorrowedBook = books[index];
    if (mostBorrowedBook["rented"] < books[index]["rented"]) mostBorrowedBook = books[index];
}
console.log(mostBorrowedBook);


// Quel est le livre le moins emprunté ?
let leastBorrowedBook;
for(let index in books) {
    if (index == 0) leastBorrowedBook = books[index];
    if (leastBorrowedBook["rented"] > books[index]["rented"]) leastBorrowedBook = books[index];
}
console.log(leastBorrowedBook);


// Supprime le livre avec l'ID 133712
let indexSpecificId;
for(let index in books) {
    if (books[index]["id"] == 133712) indexSpecificId = index;
}
books.splice(indexSpecificId, 1)
console.log(books);