/* 


Students will then create an array with everyone's info from the variables they created. 

For the final part -  console log a sentence from the newly created array. 
"There were  3 . people in our group. Their names were  Rob , Ted,  Fred.  Rob graduated in 1998. Ted's favorite singer is Michael jackson. And Fred does not have any pets."

*/

let jonas = {
    name: "Jonas",
    age: 18,
    graduatedHSYear: null,
    pets: true,
    petNames: ["penney", "djin"],
    mostRecentMovieWatched: "lil ballzac 2",
    carsOwned: [{Make: "ford", model: "e450"}],
    favoriteSinger: "illenium",
}

let leif = {
    name: "Leif",
    age: 35,
    graduatedHSYear: 2005,
    pets: true,
    petNames: ["Apu"],
    mostRecentMovieWatched: "The Three Amigos",
    carsOwned: [{make: "Mazda", model: "B3000 Truck"}],
    favoriteSinger: "Phish"
}

let Danika = {
    name: "Danika",
    age: 31,
    graduatedHSYear: 2009,
    pets: true,
    petNames: ["Schoki"],
    mostRecentMovieWatched: "Speceship Earth",
    carsOwned: [{Make: "Subaru", model: "Impreza"}],
    favoriteSinger: "Sharon Van Etten",
}

let peoples = [jonas, leif, Danika];



console.log(`there were ${peoples.length} people in our group, Their names where ${peoples[0].name} ${peoples[1].name} ${peoples[2].name}. ${peoples[0].name} never graduated HS. ${peoples[1].name}'s has a pet called ${peoples[1].petNames[0]}. ${peoples[2].name}'s favorite singer is ${peoples[2].favoriteSinger}`)



