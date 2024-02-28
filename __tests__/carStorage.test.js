"use strict";

const CarStorage = require("../carStorage");
const cars = require("../dataStorage.json");

describe("Test cases for the constructor", () => {
  test("Test 1: missing parameter throws an exception", () => {
    expect(() => new CarStorage()).toThrow("data storage missing");
  });
});

describe("Test cases for getAllCarsByModel", () => {
  const storage = new CarStorage(cars);
  test("Test 1: searchValue chrome", () => {
    const result = [
      {
        carID: 1,
        model: "chrome",
        price: 123,
        rating: "***",
        accessories: ["clock", "speedometer", "repair set"],
        details: {
          powerSource: "gasoline",
          consumptionPer100km: 1,
          notes: "no comments",
        },
      },
    ];

    expect(storage.getAllCarsByModel("chrome")).toEqual(result);
  });

  test("Test 2: searchValue gold", () => {
    const result = [
      {
        carID: 2,
        model: "gold",
        price: 36,
        rating: "**",
        accessories: ["coffee warmer", "clock", "radar"],
        details: {
          powerSource: "pushing",
          consumptionPer100km: 7,
          notes: "old model",
        },
      },
    ];

    expect(storage.getAllCarsByModel("gold")).toEqual(result);
  });

  test("Test 3: searchValue GT", () => {
    const result = [
      {
        carID: 3,
        model: "GT",
        price: 15,
        rating: "***",
        accessories: ["warranty", "radar", "coffee warmer"],
        details: {
          powerSource: "pedalling",
          consumptionPer100km: 1,
          notes: "-",
        },
      },
    ];

    expect(storage.getAllCarsByModel("GT")).toEqual(result);
  });

  test("Test 4: searchValue silver", () => {
    const result = [
      {
        carID: 4,
        model: "silver",
        price: 15,
        rating: "*****",
        accessories: ["speedometer", "hook", "clock"],
        details: {
          powerSource: "gasoline",
          consumptionPer100km: 6,
          notes: "low emission",
        },
      },
      {
        carID: 5,
        model: "silver",
        price: 200,
        rating: "**",
        accessories: ["hook", "warranty", "coffee warmer"],
      },
    ];

    expect(storage.getAllCarsByModel("silver")).toEqual(result);
  });

  test("Test 5: searchValue x", () => {
    expect(storage.getAllCarsByModel("x")).toEqual([]);
  });

  test("Test 6: missing parameter", () => {
    expect(() => storage.getAllCarsByModel()).toThrow("missing parameter");
  });
});
