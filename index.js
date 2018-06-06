let driverId = 0;
let passengerId = 0;
let tripId = 0;
let store = {passengers: [], drivers: [], trips: []};

class Driver {
    constructor(name) {
        this.name = name; 
        this.id = ++driverId;

        store.drivers.push(this);
    }
}

class Passenger {
    constructor(name) {
        this.name = name;
        this.id = ++passengerId; 

        store.passengers.push(this);
    }
}

class Trip {
    constructor(driver, passenger){
        this.driver = driver;
        this.id = ++tripId;
        this.passengerId = passenger.id;
        this.driverId = driver.id;
        store.trips.push(this);

        Trip.prototype.passenger = function() {
            return store.passengers.find(passenger => {return this.passengerId = passenger.id});
        }

        Trip.prototype.driver = function() {
            return store.drivers.find(driver => {return this.driverId = driver.id});
        }

    }
}