const rect = require("./rectangle");

function solveRect (l, b) {
  rect(l, b, (error, R) => {
    if (error) {
      console.log(error);
      return 
    }
    console.log("Area: ", R.area());
    console.log("Perimeter: ", R.perimeter(), "\n");
  });
};

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);