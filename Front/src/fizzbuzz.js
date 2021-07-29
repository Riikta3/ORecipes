/* eslint-disable no-plusplus */
// renvoie une string
const fizzBuzz = (nbrMax) => {
  // objectif :
  // je veux fabriquer une string
  // qui contient tous les nombres de 0 a nbrMax (le parametre)
  // sauf que...
  // je veux remplacer les multiples de 3 par "Fizz",
  // je veux remplacer les multiples de 5 par "Buzz",
  // et les multiples de 3 et 5 par "FizzBuzz"
  const numbers = [];

  for (let i = 1; i <= nbrMax; i++) {
    if (i % 15 === 0) {
      // si c'est un multiple de 3 et 5
      numbers.push('FizzBuzz');
    }
    else if (i % 3 === 0) { // si multiple de 3
      numbers.push('Fizz');
    }
    else if (i % 5 === 0) { // c'est un multiple de 5
      numbers.push('Buzz');
    }
    else {
      numbers.push(i);
    }
  }

  // je renvoie le tableau que je transforme en string
  // en mettant entre chaque case, le parametre de join
  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  return numbers.join(', ');
};

export default fizzBuzz;
