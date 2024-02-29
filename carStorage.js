"use strict";

module.exports = class CarStorage {
  #storage;

  constructor(jsondata) {
    if (!jsondata) throw new Error("data storage missing");
    this.#storage = jsondata;
  }

  getAllCarsByModel(searchValue) {
    if (arguments.length < 1) throw new Error("missing parameter");

    return this.#storage.filter((car) => car.model === searchValue);
  }

  getCarAccessories(searchKey) {
    let carAccessoriesFound = [];

    for (const car of this.#storage) {
      if (car.carID === searchKey) {
        carAccessoriesFound = car.accessories;
      }
    }
    return carAccessoriesFound;
  }

  getTotalPriceOfCarsByModel(searchValue) {
    if (arguments.length < 1) throw new Error("missing parameter");

    let carsFound = [];

    for (const car of this.#storage) {
      if (car.model === searchValue) {
        carsFound.push(car.price);
      }
    }

    const totalPrice = carsFound.reduce((acc, price) => acc + price, 0);

    if (carsFound.length === 0) {
      throw new Error("nothing found with given searchValue");
    }

    return totalPrice;
  }

  getRatingOfCarByCarName(searchKey) {
    if (arguments.length < 1) throw new Error("missing parameter");

    let carsFound = [];
    for (const car of this.#storage) {
      if (car.model === searchKey) {
        carsFound.push(car.rating);
      }
    }
    return carsFound.join("\n");
  }

  getACarMatchingCarID(searchKey) {
    if (arguments.length < 1) throw new Error("missing parameter");

    let carFound = null;
    for (const car of this.#storage) {
      if (car.carID === searchKey) {
        carFound = car;
        break;
      }
    }
    return carFound;
  }
};
