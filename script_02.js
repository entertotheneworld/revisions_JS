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
books.map(element => console.log(element['title']));


// Est-ce que tous les livres ont été empruntés au moins une fois ?
let allBorrowedBooks = true;
books.map(element => {
    if (element['rented'] == 0){
        allBorrowedBooks = false;
    } 
});
allBorrowedBooks ? (console.log("Tous les livres ont été empruntés.")) : (console.log("Tous les livres n'ont pas été empruntés."));


// Quel est le livre le plus emprunté ?
const mostBorrowedBook = books.reduce((maxRented, element) =>
    element.rented > maxRented.rented ? element : maxRented, books[0]
);
console.log(mostBorrowedBook);


// Quel est le livre le moins emprunté ?
const leastBorrowedBook = books.reduce((minRented, element) =>
    element.rented < minRented.rented ? element : minRented, books[0]
);
console.log(leastBorrowedBook);


// Supprime le livre avec l'ID 133712
const indexSpecificId = books.map(element => {
    var rObj = {};
    rObj['title'] = element['title'];
    rObj['id'] = element['id'];
    rObj['rented'] = element['rented'];
    if (element.id != 133712) return rObj;
});
console.log(indexSpecificId);