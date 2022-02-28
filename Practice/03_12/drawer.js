class Drawer {
  constructor(name, volume, color, drawerBox, boxSizeH, boxSizeW, boxOpen) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.drawerBox = drawerBox;
    this.boxSize = {
      hieght: boxSizeH,
      width: boxSizeW,
    };
    this.boxOpen = boxOpen;
  }
}

export default Drawer;
