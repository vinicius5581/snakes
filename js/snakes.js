class Snakes {
    constructor() {
        console.log(this.matrixGenerator(10,10));
    }

    matrixGenerator(rows, cols){
        return [...new Array(rows)].map(row => [...new Array(cols)].map(col => 0))
    }

    renderMatrix(snake) {

    }
}

const game = new Snakes();