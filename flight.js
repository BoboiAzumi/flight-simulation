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
    try {
        if (Math.random() > 0.5) {
            throw new Error('Cannot take off the flight');
        }
        const currentTime = new Date().toLocaleTimeString();
        console.log(`Plane is taking off at ${currentTime}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

function flight(latitude) {
    if (Math.random() > 0.90) {
        throw new EngineError('Mesin tidak berkerja, ada kerusakan');
    }

    if (latitude > 11000 || latitude < 1000) {
        console.log('Pesawat terbang di ketinggian: ', latitude);
        throw new FlightError('Tidak dapat terbang dengan baik di ketinggian ini');
    }
    console.log('Terbang di ketinggian: ', latitude);
}

function land() {
    try {
        const currentTime = new Date().toLocaleTimeString();
        console.log(`Plane is landing at ${currentTime}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

function planeSimulation(fly, latitude) {
    // TODO
}

let latitude = Math.floor(Math.random() * 10000);
let fly = 0;
planeSimulation(0, 9000);