'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');
const VehicleFactory = require('./vehicle-factory');
const VehicleClass = require('./vehicle-class');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class
const jag = new VehicleClass.Car('Jaguar', 4);
console.log(jag.name, jag.drive(), jag.stop());

const bike = new VehicleClass.Motorcycle('motorbike', 2);
console.log(bike.name, bike.wheelie(), bike.stop());

// Implement a car and motorcycle using a Factory
const indian = VehicleFactory.motorcycleFactory('indian', 2);
console.log(indian.name, indian.wheelie(), indian.stop());

const delorean = VehicleFactory.CarFactory('delorean', 4);
console.log(delorean.name, delorean.drive(), delorean.stop());


