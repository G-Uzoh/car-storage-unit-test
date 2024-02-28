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
};
