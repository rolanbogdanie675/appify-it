/* 
Filename: sophisticatedCode.js
Description: This is a complex JavaScript code that implements a simulation of a virtual pet game called "Virtual Pet Simulator". It includes various features like feeding, playing, cleaning, and monitoring the health and happiness levels of the virtual pet.
*/

// Virtual Pet class
class VirtualPet {
  constructor(name, type) {
    this.name = name;
    this.type = type;

    this.hunger = 0;
    this.happiness = 100;
    this.hygiene = 100;
    this.energy = 100;
    this.health = 100;
    this.age = 0;
    this.isAlive = true;
    this.isSleeping = false;
  }

  // Method to feed the virtual pet
  feed() {
    if (this.isAlive) {
      this.hunger -= 10;
      this.happiness += 5;
      this.hygiene -= 2;

      if (this.hunger < 0) this.hunger = 0;
      if (this.hunger > 100) this.hunger = 100;
      if (this.happiness > 100) this.happiness = 100;
      if (this.hygiene < 0) this.hygiene = 0;
    } else {
      console.log(`${this.name} is no longer alive.`);
    }
  }

  // Method to play with the virtual pet
  play() {
    if (this.isAlive) {
      this.happiness += 10;
      this.energy -= 5;
      this.age += 1;

      if (this.happiness > 100) this.happiness = 100;
      if (this.energy < 0) this.energy = 0;
      if (this.age > 100) {
        this.age = 100;
        this.health -= 20;
      }
    } else {
      console.log(`${this.name} is no longer alive.`);
    }
  }

  // Method to clean the virtual pet
  clean() {
    if (this.isAlive) {
      this.hygiene += 10;
      this.happiness += 5;

      if (this.hygiene > 100) this.hygiene = 100;
      if (this.happiness > 100) this.happiness = 100;
    } else {
      console.log(`${this.name} is no longer alive.`);
    }
  }

  // Method to monitor virtual pet's health and happiness levels
  monitor() {
    if (this.isAlive) {
      console.log(`${this.name}'s Stats:
        Hunger: ${this.hunger}
        Happiness: ${this.happiness}
        Hygiene: ${this.hygiene}
        Energy: ${this.energy}
        Health: ${this.health}
        Age: ${this.age}
      `);
    } else {
      console.log(`${this.name} is no longer alive.`);
    }
  }

  // Method to put the virtual pet to sleep
  sleep() {
    if (this.isAlive) {
      this.isSleeping = true;
      this.energy += 50;

      if (this.energy > 100) this.energy = 100;
    } else {
      console.log(`${this.name} is no longer alive.`);
    }
  }

  // Method to wake up the virtual pet
  wakeUp() {
    if (this.isAlive) {
      this.isSleeping = false;

      console.log(`${this.name} woke up!`);
    } else {
      console.log(`${this.name} is no longer alive.`);
    }
  }

  // Method to check virtual pet's status
  checkStatus() {
    if (this.isAlive) {
      if (this.hunger >= 100 || this.happiness <= 0 || this.hygiene <= 0 || this.energy <= 0 || this.health <= 0) {
        console.log(`${this.name}'s health is critical!`);
        this.health -= 50;

        if (this.health <= 0) {
          console.log(`${this.name} has died.`);
          this.isAlive = false;
        }
      }
    } else {
      console.log(`${this.name} is no longer alive.`);
    }
  }
}

// Create a new virtual pet
const myVirtualPet = new VirtualPet("Fluffy", "Cat");

// Simulate interactions with the virtual pet
myVirtualPet.feed();
myVirtualPet.play();
myVirtualPet.clean();
myVirtualPet.monitor();
myVirtualPet.sleep();
myVirtualPet.wakeUp();
myVirtualPet.checkStatus();

// ... (continue simulating interactions, adding more complexity and features)

console.log("Virtual Pet Simulator finished!");