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


    trips(){
        return store.trips.filter(trip => {return this.driverId = this.id});
    }

    passengers(){
        let driversPassengers = [];

        this.trips().forEach(t => {
            driversPassengers.push(store.passengers.find(p => { return p.id === t.passengerId }))
        });
        return driversPassengers;
    }
}

class Passenger {
    constructor(name) {
        this.name = name;
        this.id = ++passengerId; 

        store.passengers.push(this);
    }

    trips(){
        return store.trips.filter(trip => {return this.passengerId = this.id});
    }

    drivers(){
        let drivers = [];

        this.trips().forEach(t => {
            drivers.push(store.drivers.find(p => { return p.id === t.driverId }))
        });
        return drivers;
    }

}


class Trip {
    constructor(driver, passenger){
        this.id = ++tripId;
        this.passengerId = passenger.id;
        this.driverId = driver.id;
        store.passengers.push(this);
        this.passenger = this.passenger.bind(this);
        store.trips.push(this);
    }

    passenger(){
        return store.passengers.find(passenger => {return this.passengerId = passenger.id});
    }

    driver(){
        return store.drivers.find(driver => {return this.driverId = driver.id});
    }
}
