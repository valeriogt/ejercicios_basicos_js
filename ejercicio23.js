const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },  
  { name: "The Matrix", durationInMinutes: 136 },  
  { name: "Amélie", durationInMinutes: 110 },  
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const smallMovies = [];
const mediumMovies = [];
const bigMovies = [];

for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];
  if (movie.durationInMinutes < 100) {
    smallMovies.push(movie);
  } else if (movie.durationInMinutes > 100 && movie.durationInMinutes < 200) {
    mediumMovies.push(movie);
  } else if (movie.durationInMinutes > 200) {
    bigMovies.push(movie);
  }
}

console.log("Películas pequeñas:", smallMovies);
console.log("Películas medianas:", mediumMovies);
console.log("Películas grandes:", bigMovies);

/*
Resultados esperados:
Películas pequeñas: [ { name: 'Spirited Away', durationInMinutes: 80 } ]
Películas medianas: [ { name: 'Titan A.E.', ... }, { name: 'Inception', ... }, ... ]
Películas grandes: [ { name: 'Nightmare before Christmas', ... }, { name: 'The Lord of the Rings', ... }, { name: 'Star Wars: A New Hope', ... } ]
*/
