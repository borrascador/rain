
function Player(playerClass, name){
    this.name = name;
    this.playerClass = playerClass;
    this.partySize = 100;
    this.resources = 1000;
}

function Encounter(attacker, defender) {
    this.attacker = attacker;
    this.defender = defender;
}

function Move(player){
    this.player = player;
    this.array = [0,0,0,0];
    this.log = function(){
        console.log(this.player.name + " makes move " + this.array);
    }
}

function generateRandomMove(player){
    var partition = new Array();
    partition.push(0);
    for (i = 0; i<3 ; i++){
        partition.push(Math.floor(Math.random() * player.partySize));
    }
    partition.sort(function(a,b) { return a - b; });
    partition.push(player.partySize);

    var move = new Move(player);
    for (i = 0; i<4; i++){
        move.array[i] = partition[i+1] - partition[i];
    }

    //console.log(partition);
    move.log();

    return move;
}

function handleTurn(encounter){
    var a = encounter.attacker;
    var d = encounter.defender;

    console.log("\nattacker: " + a.name + "(party size " + a.partySize +
    ")\ndefender: " +d.name + "(party size " + d.partySize + ")");
    var attack = generateRandomMove(a);
    var defend = generateRandomMove(d);


    for (i=0;i<4;i++){
        console.log();
        if (attack.array[i] > defend.array[i]){
            d.resources -= 100;
            a.resources += 100;
            console.log(a.name + " won encounter " + i + " and gained 100 resources.");
        } else {
            a.partySize -= 2;
            console.log(d.name + " won encounter " + i +  " and " + a.name +" lost 2 people .");
        }
    }
    console.log("\nResults");
    console.log(a.name + " resources: " + a.resources + ", party size: " + a.partySize);
    console.log(d.name + " resources: " + d.resources + ", party size: " + d.partySize + "\n");

}


/*
function chooseClass(name, playerClasses){
    var div = document.createElement("DIV");
    div.setAttribute("style", "background-color: gray;");
    div.appendChild(document.createTextNode("Choose player " + name + "class:"));

    var player;

    for (i = 0; i < playerClasses.length; i++) {
        var button = document.createElement("BUTTON");
        var playerClass = playerClasses[i];
        button.appendChild(document.createTextNode(playerClass));
        button.setAttribute("id", playerClass);
        button.addEventListener("click", function(){
            clearElement(div);
            player = new Player(this.id);
            div.appendChild(document.createTextNode("Player 1: " + this.id));
        });
        div.appendChild(button);
    }

    document.body.appendChild(div);
    return player;
}



function clearElement(e)
{
    e.innerHTML = "";
}
*/

var playerClasses = ["SCIENTIST","LOGGER", "MINER", "TRIBE"];


var playerA = new Player(playerClasses[1], "Dan");
var playerB = new Player(playerClasses[2], "Jan");

var encounter = new Encounter(playerA, playerB);

handleTurn(encounter);

