$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


     createPlatform(850, 400, 200, 10, "hotpink");
     createPlatform(1100, 500, 2000, 10, "hotpink");
     createPlatform(800, 590, 200, 10, "hotpink");
     createPlatform(200, 700, 200, 10, "hotpink");
     createPlatform(500, 650, 200, 10, "hotpink");
     createPlatform(600, 350, 200, 10, "hotpink");
     createPlatform(100, 290, 440, 10, "hotpink");



     createCollectable("diamond", 200, 170, 0.5, 0.7);




    
     createCannon("top", 300, 1000);
     createCannon("right", 400, 3500);
     createCannon("right", 610, 3000);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
