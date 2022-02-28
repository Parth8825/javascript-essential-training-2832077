/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log(backpack);
console.log("The pocketNum Value: ", backpack.pocketNum);
console.log("Strap length L: ", backpack.strapLength.left);

//two other ways to call property of the object
var query = "pocketNum";
console.log("The pocketNum Value: ", backpack["pocketNum"]);
console.log("The pocketNum Value: ", backpack[query]);
