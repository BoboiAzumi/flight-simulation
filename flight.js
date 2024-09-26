class TakeOffError extends Error {
    constructor(message) {
        super(message);
        this.name = 'TakeOffError';
    }
}

class FlightError extends Error {
    constructor(message) {
        super(message);
        this.name = 'FlightError';
    }
}

class EngineError extends Error {
    constructor(message) {
        super(message);
        this.name = 'EngineError';
    }
}

function takeOff() {
    // TODO
}

function flight(latitude) {
    // TODO
}

function land() {
    // TODO
}

function planeSimulation(fly, latitude) {
    // TODO
}

let latitude = Math.floor(Math.random() * 10000);
let fly = 0;
planeSimulation(0, 9000);