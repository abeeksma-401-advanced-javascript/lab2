
'use strict';

const vehicleFactory = function(name, wheels){
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
    vehicleFactory(name, wheels)
  );
}

const motorcycleFactory = function(name, wheels) {
  let motorcycle = Object.assign(
    vehicleFactory(name, wheels),
    {
      wheelie: function(){
        return 'Wheee!';
      },
    }
  );
};

module.exports = {CarFactory, motorcycleFactory};