"use strict";

class Matrix {
  matrixGenerator(rows, cols) {
    return [...new Array(rows)].map(row => [...new Array(cols)].map(col => 0));
  }

  renderMatrix(snake) {}

}

class Snakes extends Matrix {
  constructor() {
    super();
    console.log(this.matrixGenerator(10, 10));
    console.log('test');
  }

}

const game = new Snakes();