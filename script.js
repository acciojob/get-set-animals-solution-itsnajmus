class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log("The " + this.species + " makes a sound");
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

const cat = new Cat("cat");
cat.makeSound(); // logs "The cat makes a sound"
cat.purr(); // logs "purr"

const dog = new Dog("dog");
dog.makeSound(); // logs "The dog makes a sound"
dog.bark(); // logs "woof"



// class Animal {
//   constructor(species) {
//     this._species = species;
//   }

//   get species() {
//     return this._species;
//   }

//   makeSound() {
//     console.log("The " + this.species + " makes a sound");
//   }
// }

// class Cat extends Animal {
//   purr() {
//     console.log("purr");
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log("woof");
//   }
// }

// // Do not change the code below this line
// window.Animal = Animal;
// window.Dog = Dog;
// window.Cat = Cat;
