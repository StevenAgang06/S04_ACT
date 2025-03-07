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

// Assign random damage base on basic attack damage every move
let assignDmg = function (pokemonObject, index, advantages) {
  for (let iterator = 0; iterator < 3; iterator++) {
    let percent = Math.random() * 0.2 - 0.1 + 0.1;
    pokemonObject.move[index][0].attackDmg[iterator] =
      pokemonObject.attack[index] * percent;
  }
  if (advantages !== undefined) {
    if (advantages > 0) {
      for (let iterator = 0; iterator < 3; iterator++) {
        pokemonObject.move[index][0].attackDmg[iterator] =
          pokemonObject.move[index][0].attackDmg[iterator] * 0.5 +
          pokemonObject.move[index][0].attackDmg[iterator];
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

// check user/bot pokemon advantage
let typeAdvantage = function (userPick, botPick, user) {
  if (user === "user") {
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
  } else {
    switch (botPick) {
      case "Fire":
        if (userPick === "Grass") {
          return 1;
        } else {
          return 0;
        }
      case "Water":
        if (userPick === "Fire") {
          return 1;
        } else {
          return 0;
        }
      case "Grass":
        if (userPick === "Water") {
          return 1;
        } else {
          return 0;
        }
      default:
        return undefined;
    }
  }
};

let chooseMoves = function (pokemonMoves, type, user = null) {
  if (user === "bot") {
    return Math.floor(Math.random() * (3 - 0));
  }
  let chooseMove = undefined;
  switch (type) {
    case "Fire":
      chooseMove = prompt(
        `Choose Move \n 1: ${pokemonMoves.attackName[0]} \n 2: ${pokemonMoves.attackName[1]} \n 3: ${pokemonMoves.attackName[2]}`
      );
      if (isNaN(chooseMove) || chooseMove < 1 || chooseMove > 3) {
        return alert("Invalid moves");
      }
      return chooseMove - 1;
    case "Water":
      chooseMove = prompt(
        `Choose Move \n 1: ${pokemonMoves.attackName[0]} \n 2: ${pokemonMoves.attackName[1]} \n 3: ${pokemonMoves.attackName[2]}`
      );
      if (isNaN(chooseMove) || chooseMove < 1 || chooseMove > 3) {
        return alert("Invalid moves");
      }
      return chooseMove - 1;
    case "Grass":
      chooseMove = prompt(
        `Choose Move \n 1: ${pokemonMoves.attackName[0]} \n 2: ${pokemonMoves.attackName[1]} \n 3: ${pokemonMoves.attackName[2]}`
      );
      if (isNaN(chooseMove) || chooseMove < 1 || chooseMove > 3) {
        return alert("Invalid moves");
      }
      return chooseMove - 1;
  }
};

let pokemonBattle = function (moves, pokemon) {
  if (isNaN(moves)) return;
  if (pokemon.defense != 0) {
    defHit = pokemon.move.attackDmg[moves] * 0.4;
    hpHit = pokemon.move.attackDmg[moves] * 0.6;
    pokemon.hp -= hpHit;
    pokemon.defense -= defHit;
  } else {
    pokemon.hp -= pokemon.move.attackDmg[moves];
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

alert(
  "The one that got an advantage will got a 5% damage boost \n \n Fire > Grass \n Water > Fire \n Grass > Water \n  \nif both of you pick the same type no one will get the advantage"
);
let userPick = userSelectPokemonType(pokemonObject());
let botPick;

if (!isNaN(userPick)) {
  botPick = botEnemy(pokemonObject());
  let userPokemon = new Pokemon(
    pokemonObject().name[userPick],
    pokemonObject().type[userPick],
    pokemonObject().hp[userPick],
    pokemonObject().attack[userPick],
    pokemonObject().defense[userPick],
    assignDmg(
      pokemonObject(),
      userPick,
      typeAdvantage(
        pokemonObject().type[userPick],
        pokemonObject().type[botPick],
        "user"
      )
    )
  );
  let botPokemon = new Pokemon(
    pokemonObject().name[botPick],
    pokemonObject().type[botPick],
    pokemonObject().hp[botPick],
    pokemonObject().attack[botPick],
    pokemonObject().defense[botPick],
    assignDmg(
      pokemonObject(),
      botPick,
      typeAdvantage(
        pokemonObject().type[userPick],
        pokemonObject().type[botPick],
        "user"
      )
    )
  );

  alert("Every pokemon moves has a random damage. Choose wisely and goodluck");
  for (let iterator = 0; iterator != 1; ) {
    alert("User turn");
    let userMoves = chooseMoves(userPokemon.move, userPokemon.type);
    pokemonBattle(userMoves, botPokemon);
    alert(
      `Enemy Pokemon has ${
        botPokemon.hp > 0
          ? `Survived, Enemy HP is: ${Math.floor(
              botPokemon.hp
            )} \n Enemy Defense is: ${Math.floor(botPokemon.defense)} `
          : `Fainted, Enemy HP is: 0 \n Enemy Defense is: 0`
      }`
    );
    botPokemon.hp <= 0 ? (iterator = 1) : undefined;
    alert("Enemy turn");
    let botMoves = chooseMoves(botPokemon.move, botPokemon.type, "bot");
    pokemonBattle(botMoves, userPokemon);
    alert(
      `User Pokemon has ${
        botPokemon.hp > 0
          ? `Survived, User HP is: ${Math.floor(
              userPokemon.hp
            )} \n User Defense is: ${Math.floor(userPokemon.defense)}`
          : `Fainted, User HP is\ 0 \n User Defense is: 0`
      }`
    );
    userPokemon.hp <= 0 ? (iterator = 1) : undefined;
  }
}
