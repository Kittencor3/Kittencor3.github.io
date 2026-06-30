function moveScenery() {
  // TODO 2: Move background scenery based on current level speed
   for (var i = 0; i < scenery.building.instances.length; i++) {
        var buildingInstance = scenery.building.instances[i];
        // updates x position on buildings by adding speedX and currentLevel.speed
        buildingInstance.x += buildingInstance.speedX + currentLevel.speed;
        // checks if the buildings moved off the left edge
        if (buildingInstance.x + buildingInstance.width < 0) {
          // wraps it back to the other side
          buildingInstance.x = scenery.building.loopWidth;
        }
        // loops through the lamps
        for (var j = 0; j < scenery.lamp.instances.length; j++) {
        var lampInstance = scenery.lamp.instances[j];
        // updates x position on lamps by adding speedX and currentLevel.speed
        lampInstance.x += lampInstance.speedX + currentLevel.speed;
        // checks if the lights moved off the left edge
        if (lampInstance.x + lampInstance.width < 0) {
          // wraps it back to the other side
        lampInstance.x = scenery.lamp.loopWidth;
      }
    }
  }
}

function generateLevel() {
  // TODO 3: Generate the current level's game objects
   for (var i = 0; i < currentLevel.gameObjects.length; i++){
    var currentObject = currentLevel.gameObjects[i];

    create(currentObject)

    console.log(currentObject.type, currentObject.kind)
  }
}

function create(obj) {
  // TODO 4: Create a game object based on its type and kind
}

function filterObjects(type) {
  // TODO 5: Return only the game objects of the specified type
}

function moveGameObjects(objectList) {
  // TODO 6: Move all game objects of a single type based on speeds
}

function handleProjectileCollisions() {
  // TODO 8: Handle collisions between projectiles and enemies
}

function handleHallebotGenericCollisions() {
  // TODO 9: Handle collisions between Hallebot and game objects
}

function triggerLevelTransition() {
  // TODO 10: Transition to the next level or show win screen
}
