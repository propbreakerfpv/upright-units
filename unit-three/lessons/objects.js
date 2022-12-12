
let abby = {
    species: "dog",
    color: "brown",
    spayed: true,
    breed: "mut",
    weight: 40,
    favoriteActivity: "chasing squirrels",
    bestPlayFriends: ["Buster", "Lady", "Daisy"]
}



let buster = {
    species: "dog",
    color: "black",
    spayed: false,
    breed: "husky",
    weight: 35,
    favoriteActivity: "chasing dogs",
    bestPlayFriends: ["abby"]
}

abby.name = "abby"

let combined = [abby, buster];
console.log(`${combined[0].name} is a ${combined[0].species} and has ${combined[0].bestPlayFriends.length} friends.`)


