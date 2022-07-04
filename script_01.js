const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Sors une array qui ne contient que le prénom et le nom des entrepreneurs
entrepreneurs.map(element => console.log(element['first'], element['last']));


// Pour chaque entrepreneur, remplace la date de naissance par l'âge de l'entrepreneur qu'il aurait aujourd'hui.
const ageFunction = year => 2022 - year;
const listAge = entrepreneurs.map(element => {
    var rObj = {};
    let age;
    age = ageFunction(element['year']);
    rObj['first'] = element['first'];
    rObj['last'] = element['last'];
    rObj['age'] = age;
    return rObj;
});
console.log(listAge);


// Les clés first et last manquent de lisibilité, remplace-les par firstName et lastName
const listName = listAge.map(element => {
    var rObj = {};
    rObj['firstName'] = element['first'];
    rObj['lastName'] = element['last'];
    rObj['age'] = element['age'];
    return rObj;
});
console.log(listName);


// Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
const functionBorn70s = (age) => {
    let year;
    year = 2022 - age;
    return (year < 1980 && year > 1969) ? true : false;
};
const entrepreneurs70s = listName.filter(element => functionBorn70s(element['age']));
console.log(entrepreneurs70s);