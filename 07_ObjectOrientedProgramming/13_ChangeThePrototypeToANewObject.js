function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: function(){
    console.log("nyam nyam");
  },
  describe: function(){
    console.log("They call me " + this.name)
  }
};