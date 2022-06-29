let Comedy = [
  {
    title: "Meet The Parents",
    director: "Jay Roach",
    year: "2002",
  },
  {
    title: "School of Rock",
    director: "Richard Linklater",
    year: "2003",
  },
  {
    title: "The Mask",
    director: "Chuck Russell",
    year: "1994",
  },
];

let Action = [
  {
    title: "John Wick",
    director: "Chad Stahelski",
    year: "2014",
  },
  {
    title: "The Man from Toronto",
    director: "Patrick Hughes",
    year: "2022",
  },
  {
    title: "Die Hard",
    director: "John McTiernan",
    year: "1988",
  },
];

let Fantasy = [
  {
    title: "Harry Potter",
    director: "J. K. Rowling",
    year: "1997",
  },
  {
    title: "bridge to terabitia",
    director: "Gábor Csupó",
    year: "2007",
  },
  {
    title: "The Spiderwick Chronicles",
    director: "Mark Waters",
    year: "2008",
  },
];

console.log(Comedy);
console.log(Action);
console.log(Fantasy);

if (Fantasy[2].title === "The Spiderwick Chronicles") {
  console.log(`My Favorite Movie is ${Fantasy[2].title}`);
} else {
  console.log("This movie is not even five stars");
}
