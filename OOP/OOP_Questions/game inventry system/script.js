// 9. Method Chaining
// Scenario: You are developing a game inventory system where a player can collect items and upgrade weapons.

// TODO:
// Create a Player class with methods collectItem(item), upgradeWeapon(level), and showInventory().
// Implement method chaining so that player.collectItem("sword").upgradeWeapon(2).showInventory(); works.

class Player{
    constructor(){
        this.inventory = [];
    }
    collectItem(name){
        this.inventory.push(name);
        return this;
    }

    upgradeWeapon(level){
        this.weaponLevel = level;
        return this;
    }

    showInventory(){
        document.writeln(`Weapon: ${this.inventory}, weaponLevel: ${this.weaponLevel} <br>`);
        return this;
    }
}

const player = new Player();
player.collectItem('sword').upgradeWeapon(50).showInventory().collectItem('Gun').upgradeWeapon(20).showInventory();
