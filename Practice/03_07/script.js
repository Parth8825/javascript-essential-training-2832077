/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const drawer = {
  name: "My personal things",
  volume: 90,
  color: "blue",
  drawerBox: 3,
  boxsize: {
    hieght: 10,
    width: 15,
  },
  boxOpen: false,
  toggleLid: function (boxStatus) {
    this.boxOpen = boxStatus;
  },
  newBoxSize: function (sizeHieght, sizeWidth) {
    this.boxsize.hieght = sizeHieght;
    this.boxsize.width = sizeWidth;
  },
};

console.log("Ther Drawr object = ", drawer);
