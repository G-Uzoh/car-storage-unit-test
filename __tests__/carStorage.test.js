"use strict";

const CarStorage = require("../carStorage");
const cars = require("../dataStorage.json");

describe("Test cases for the constructor", () => {
  test("Test 1: missing parameter throws an exception", () => {
    expect(() => new CarStorage()).toThrow("data storage missing");
  });
});
