// Minecraft - The lost village 

var readlineSync = require('readline-sync');

let playerName = readlineSync.question('Welcome to Minecraft - The Lost Village.To begin please enter your name: ');

let greeting = (`It's nice to meet you ${playerName}, best of luck on your jounrey!`);

console.log(greeting);

// player

let playerInventory = [];
let playerHealth = 40;
let playerAwards = [];

//mobs

let mobsHealth = 40;
let mobs = ["Zoglin", "Zombie Villager", "Ghast", "Creeper"];

//awards

let awardArray = ['Diamond Amor', 'Gold Sword', 'Red Stone', 'Candle Stick'];
let prize = awardArray[Math.floor(Math.random() * awardArray.length)];

    function gamePlay(){
        let attackChance = Math.random();
        let playerInput = readlineSync.question(`What would you like to do next? Enter "w" to walk - "i" to view inventory - "exit" to leave game. `);
        let mobsApperance = mobs[Math.floor(Math.random() * mobs.length)];
let mobsAttack = Math.floor(Math.random() * (10 + 4) - 1);
let playerAttack = Math.floor(Math.random() * (16 + 6) + 2);
    if (playerInput === 'exit') {
        console.log(`Thanks for playing. See you next time!`)
        playerHealth = -1;
     } else if (playerInput === 'i') {
        console.log(`Health: ${playerHealth} Awards: ${playerAwards}`);
        } else if (playerInput === 'w'){
        console.log('Walking ...')
    if (attackChance <= .4) {
            console.log('Still walking ...')
        }else if( attackChance >= .4) {
            console.log(`Oh No! The ${mobsApperance} showed up!`)
            let fightOrFlight = readlineSync.question('What should you do? To runaway choose "r" or to attack choose "a". ');
    if(fightOrFlight === 'a') {
            console.log(`${playerName} damaged ${mobsApperance} with ${playerAttack} hit points!`)
             mobsHealth -= playerAttack;
            console.log(`${mobsApperance} damaged you with ${mobsAttack} hit points.`)
            playerHealth -= mobsAttack
            if (playerHealth <= 0) {
                console.log(`Oh No ${playerName} you have been defeted! GAME OVER`);
            } else if (mobsHealth <= 0) {
                console.log( `Way to go you destroyed the ${mobsApperance}. You earned the a prize! Check your inventory!`);
                playerAwards.push(prize);
                playerHealth += 2;
            }
        }
    if(fightOrFlight === 'r') {
        if(attackChance >= .5) {
            console.log(`You escaped!!`)
        } else if (attackChance <= .5) {
             console.log(`Oh No! ${mobsApperance} attacked you with ${mobsAttack} hit points`)
            playerHealth -= mobsAttack;
        } 
       
    }
    }
        

    } 
}
    

while (playerHealth >= 0) {
    gamePlay()
}

