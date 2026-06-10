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


     createPlatform(850, 250, 200, 10, "hotpink");
     createPlatform(1100, 350, 2000, 10, "hotpink");
     createPlatform(800, 390, 270, 10, "hotpink");
     createPlatform(250, 550, 200, 10, "hotpink");
     createPlatform(500, 450, 200, 10, "hotpink");
     createPlatform(600, 200, 200, 10, "hotpink");
     createPlatform(100, 150, 440, 10, "hotpink");
     createPlatform(100, 650, 100, 10, "hotpink");



     createCollectable("diamond", 200, 100, 0.5, 0.7);
     createCollectable("steve", 550, 400, 0.5, 0.7);
     createCollectable("kennedi", 950, 350, 0.5, 0.7);
     createCollectable("max", 1200, 300, 0.5, 0.6);
     createCollectable("grace", 900, 200, 0.5, 0.7);
     createCollectable("database", 700, 100, 0.5, 0.7);
     createCollectable("kennedi", 300, 500, 0.5, 0.7);




    
     createCannon("top", 300, 2000);
     createCannon("right", 300, 3500);
     createCannon("right", 510, 3000);
     createCannon("top", 800, 2500);
     createCannon("bottom", 600, 3000)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
