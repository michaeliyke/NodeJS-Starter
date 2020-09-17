module.exports = (x, y, cb) => {
  if ((x == +x && x > 0) && (y == +y && y > 0)) {
    setTimeout(() => {
      cb(null, {
        perimeter: () => 2 * (x + y),
        area: () => x * y
      });
    }, 2000);
  } else {
    setTimeout(() => {
      cb(new Error("Both dimensions must be positive non-zero numberer"), null);
    }, 2000);
  }
};
