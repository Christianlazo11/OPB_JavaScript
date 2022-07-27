const shoppingList = ["beer", "meat", "rice", "chiken", "gun"];
shoppingList.push("Aceite de Girasol");
shoppingList.pop();

const favoriteMovies = [
  {
    title: "Fight Club",
    director: "Christopher Nolan",
    date: new Date("september 10 1999"),
  },
  {
    title: "Interstellar",
    director: "David Fincher",
    date: new Date("october 10 2014"),
  },
  {
    title: "Inception",
    director: "Christopher Nolan",
    date: new Date("june 15 2010"),
  },
];

const newListPost = favoriteMovies.filter((e) => e.date.getFullYear() > 2000);
const listDirector = favoriteMovies.map((e) => e.director);
const listTitle = favoriteMovies.map((e) => e.title);
const listConcat = listDirector.concat(listTitle);
const listConcat2 = [...listDirector, ...listTitle];
