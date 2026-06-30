// === SCENERY CREATION ===

/* Important Note:
    The background images will be drawn in order from top to bottom, so put the ones in the far background first, then work forward. Note that none of the background images can go in front of Hallebot.
*/

// TODO 1: Create more scenery instances
const scenery = {
  moon: {
    imageUrl: "images/backgrounds/moon.png",
    loopWidth: 0,
    instances: [{ x: 100, y: 175, width: 150, height: 150 }],
  },
  building: {
    imageUrl: "images/backgrounds/building.png",
    loopWidth: 1400,
    instances: [ { x: 1, width: 125, height: 355, speedX: -4 },  { x: 1, width: 125, height: 355, speedX: -4 },
      { x: 50, width: 125, height: 245, speedX: -4 },
      { x: 150, width: 100, height: 300, speedX: -4 },
      { x: 230, width: 125, height: 350, speedX: -4 },
      { x: 300, width: 125, height: 325, speedX: -4 },
      { x: 400, width: 110, height: 250, speedX: -4 },
      { x: 500, width: 125, height: 280, speedX: -4 },
      { x: 600, width: 125, height: 350, speedX: -4 },
      { x: 670, width: 125, height: 270, speedX: -4 },
      { x: 780, width: 125, height: 350, speedX: -4 },
      { x: 890, width: 125, height: 400, speedX: -4 },
      { x: 1000, width: 125, height: 245, speedX: -4 },
      { x: 1100, width: 125, height: 310, speedX: -4 },
       { x: 1200, width: 125, height: 400, speedX: -4 },
      { x: 1300, width: 125, height: 245, speedX: -4 },
      { x: 1400, width: 130, height: 275, speedX: -4 },],
    
    imageUrl: "images/backgrounds/building.png",
    loopWidth: 1400,
    instances: [{ x: 0, width: 100, height: 300, speedX: -2 }],
  },
  lamp: {
    imageUrl: "images/backgrounds/lamp.png",
    loopWidth: 1400,
    instances: [{ x: 0, width: 50, height: 150, speedX: 0 }],
  },
};
