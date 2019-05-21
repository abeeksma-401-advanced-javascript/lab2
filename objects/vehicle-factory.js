
'use strict';

const vehicleFactory = (name, wheels) => {
  return {
    name,
    wheels,
    drive: () => {
      return 'Moving Forward';
    },
    stop: () => {
      return 'Stopping';
    },
  };
}; 

function CarFactory(name, wheels) {
  let car = Object.assign(
    vehicleFactory(name, 4)
  );
  return car; 
}

const motorcycleFactory = function(name, wheels) {
  let motorcycle = Object.assign(
    vehicleFactory(name, 2),
    {
      wheelie: function(){
        return 'Wheee!';
      },
    }
  );
  return motorcycle;
};

module.exports = {CarFactory, motorcycleFactory};