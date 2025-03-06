// Pokemon Constructor
let Pokemon = function (names, type, hp, attack, defense, move) {
  this.name = names;
  this.type = type;
  this.hp = hp;
  this.attack = attack;
  this.defense = defense;
  this.move = move;
};

// Pokemon Object
let pokemonObject = function () {
  return {
    name: ["Flareon", "Squirtle", "Bulbasaur"],
    type: ["Fire", "Water", "Grass"],
    hp: [1000, 1000, 1000],
    move: [
      [
        {
          attackName: ["Flamethrower", "Last Resort", "Fire Blast"],
          attackDmg: [[], [], []],
        },
      ],
      [
        {
          attackName: ["Aqua Jet", "Aqua Tail", "Water Pulse"],
          attackDmg: [[], [], []],
        },
      ],
      [
        {
          attackName: ["Seed Bomb", "Sludge Bomb", "Power Whip"],
          attackDmg: [[], [], []],
        },
      ],
    ],
    defense: [300, 300, 300],
    attack: [300, 300, 300],
  };
};

// Assign random damage every move
let assignDmg = function (pokemonObject, index, advantages) {
  for (let iterator = 0; iterator < 3; iterator++) {
    let percent = Math.random() * 1 - 0.1 + 0.1;
    pokemonObject.move[index][0].attackDmg[iterator] =
      pokemonObject.attack[index] * percent;
  }
  console.log("The one that got an advantage will got a 5% damage boost");
  if (advantages !== undefined) {
    if (advantages > 0) {
      for (let iterator = 0; iterator < 3; iterator++) {
        pokemonObject.move[index][0].attackDmg[iterator] *= 0.5;
      }
    }
  }
  return pokemonObject.move[index][0];
};

// This function is guessing a number from 1 - 3
let botEnemy = function (pokemon) {
  let choosed = Math.floor(Math.random() * (4 - 1)) + 1;
  alert(
    `Your enemy choose ${pokemon.type[choosed - 1]}. Your enemy pokemon is ${
      pokemon.name[choosed - 1]
    }`
  );
  return choosed - 1;
};

let typeAdvantage = function (userPick, botPick) {
  switch (userPick) {
    case "Fire":
      if (botPick === "Grass") {
        return 1;
      } else {
        return 0;
      }
    case "Water":
      if (botPick === "Fire") {
        return 1;
      } else {
        return 0;
      }
    case "Grass":
      if (botPick === "Water") {
        return 1;
      } else {
        return 0;
      }
    default:
      return undefined;
  }
};

// This function is let the user input what type of pokemon he/she wants to use
let userSelectPokemonType = function (pokemon) {
  let choosed = prompt(
    `Choose what type of pokemon you want to use \n 1: ${pokemon.type[0]} \n 2: ${pokemon.type[1]} \n 3: ${pokemon.type[2]}`
  );

  if (isNaN(choosed) || choosed < 1 || choosed > 3)
    return alert("Input must be number from 1 - 3 please try again");

  alert(
    `You choose ${pokemon.type[choosed - 1]}. Your Pokemon is ${
      pokemon.name[choosed - 1]
    } `
  );
  return choosed - 1;
};

let userPick = userSelectPokemonType(pokemonObject());
let botPick;

if (!isNaN(userPick)) {
  botPick = botEnemy(pokemonObject());
  userAdvantage = typeAdvantage(
    pokemonObject().type[userPick],
    pokemonObject().type[botPick]
  );

  let userPokemon = new Pokemon(
    pokemonObject().name[userPick],
    pokemonObject().type[userPick],
    pokemonObject().hp[userPick],
    pokemonObject().attack[userPick],
    pokemonObject().defense[userPick],
    assignDmg(pokemonObject(), userPick, userAdvantage, "realUser")
  );
  let botPokemon = new Pokemon(
    pokemonObject().name[botPick],
    pokemonObject().type[botPick],
    pokemonObject().hp[botPick],
    pokemonObject().attack[botPick],
    pokemonObject().defense[botPick],
    assignDmg(pokemonObject(), botPick, userAdvantage, "bot")
  );

  console.log(userPokemon);
  console.log(botPokemon);
}

// let pokemon1 = new Pokemon("Flareon", "fire", 1000);
// let typeAdvantage = function (attackerType, defenderType) {
//   switch (attackerType) {
//     case "fire" || "Fire":
//   }
// };

// let battle = function (pokemon1, pokemon2) {};
