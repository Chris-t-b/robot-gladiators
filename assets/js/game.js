var playername = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function
var fight = function (enemyName) {
    while (playerHealth > 0 && enemyHealth > 0)
        // ask player if theyd like to fight
        var promptFight = window.prompt("Would you like to FIGHT or Skip this battle? Enter 'FIGHT' or 'SKIP' to choose.");


    // if player choses to skip confirm and then stop loop
    if (promptFight === "skip" || promptFight === "SKIP") {

        // confirm player wants to skip 
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // is yes (true), leave fight 
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping 
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");

        // award player money for winning
        playerMoney = playerMoney + 20;

        // leave while() loop since enemy is dead
        break;
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        // leave while() loop if player is dead
        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
}
};

// function to start a new game
var startGame = function () {
    //reset player stats 
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

            // pick new enemy to fight based on the index of the enemy names array
            var pickedEnemyName = enemyNames[i];

            // reset enemy health before starting new fight
            enemyHealth = 50;

            // use debugger to pause script from running and check what's going on at that moment in the code
            // debugger;

            // pass the picked enemy name variable value into the fight function where it will assume the value of the enemy name paramete
            fight(pickedEnemyName);
        }
        //if player is dead stop game
        else {
            window.alert('you have lost your robot in battle! Game Over!');
            break;
        }
    }
    // play again
    startGame();
    // function to end the entire game
    var endGame = function() {
        // if player is still alive, player wins
        if (playerHealth > 0) {
            window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
        }
        else {
            window.alert("You've lost your robot in battle.");
        }
        window.alert("The game has now ended. Lets see how you did!");
    }
};
//start the game when the page loads 
startGame();