'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};

// List.prototype.shift = function() {
// myShift = (arr) => {
//   let newArray = [];
//   newArray.length = arr.length-1;
//   let elementReturned = arr[0];
//   for(let i = 1; i < arr.length; i++){
//     newArray[i-1] = arr[i];
//   }
//   arr.length = 0;
//   let arr = newArray;
//   return elementReturned;
//   return arr;
    
// }
// };

// List.prototype.unshift = function() {

// };

// List.prototype.forEach = function() {

// };

module.exports = List;

