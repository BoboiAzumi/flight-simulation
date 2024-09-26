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
    // TODO
}

function planeSimulation(fly, latitude) {
    try{
        if(fly === 0){
            takeOff()
        }
        while(fly < 3){
            flight(latitude)
            latitude += Math.round(Math.random() * 1000)
        }
        
        land()
    }
    catch (error){
        if(error instanceof TakeOffError){
            console.log(error.message)
        }
        else if(error instanceof FlightError){
            latitude = 9000;
            if(fly < 3){
                fly++
                console.log("Mencoba terbang kembali")
                planeSimulation(fly, latitude)
            }
        }
        else if (error instanceof EngineError) {
            console.log('Pesawat rusak');
        } else {
            console.log('Gagal simulasi');
        }
        
    }
}

let latitude = Math.floor(Math.random() * 10000);
let fly = 0;
planeSimulation(0, 9000);