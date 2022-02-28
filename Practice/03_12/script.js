/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Drawer from "./drawer.js";

const everyDrawer = new Drawer("My things", 90, "Red", 3, 10, 15, false);

console.log("The everDrawer object:", everyDrawer);
