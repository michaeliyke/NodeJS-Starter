const rect = require("./rectangle");


function solveRect(l, b) {
  if ((l == +l && l > 0) && (b == +b && b > 0)) {
    console.log("Area: ", rect.area(l, b));
    console.log("Perimeter: ", rect.perimeter(l, b));
    return console.log("\n");
  }
  // 
  console.log("Both dimensions must be positive non-zero numberer");
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);