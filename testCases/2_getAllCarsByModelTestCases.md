# Test cases for getAllCarsByModel

## **get_All_cars_By_model(searchValue)**

- Searches cars with given model. Returns an array of cars objects of given model.
- If no car of given model is found, returns an empty array [].
- If the parameter, searchValue is missing, throws an exception `'missing parameter'`.

The format of the object in the array is:

```json
{
  "carID": "",
  "model": "",
  "price": "",
  "rating": "",
  "accessories": ["", "", ""],
  "details": {
    "powerSource": "",
    "consumptionPer100km": "",
    "notes": ""
  }
}
```

### Example:

`searchValue` chrome:

```json
{
  "carID": 1,
  "model": "chrome",
  "price": 123,
  "rating": "***",
  "accessories": ["clock", "speedometer", "repair set"],
  "details": {
    "powerSource": "gasoline",
    "consumptionPer100km": 1,
    "notes": "no comments"
  }
}
```

## Tests

### Test 1: searchValue chrome

```json
{
  "carID": 1,
  "model": "chrome",
  "price": 123,
  "rating": "***",
  "accessories": ["clock", "speedometer", "repair set"],
  "details": {
    "powerSource": "gasoline",
    "consumptionPer100km": 1,
    "notes": "no comments"
  }
}
```

### Test 2: searchValue gold

```json
[
  {
    "carID": 2,
    "model": "gold",
    "price": 36,
    "rating": "**",
    "accessories": ["coffee warmer", "clock", "radar"],
    "details": {
      "powerSource": "pushing",
      "consumptionPer100km": 7,
      "notes": "old model"
    }
  }
]
```

### Test 3: searchValue GT

```json
[
  {
    "carID": 3,
    "model": "GT",
    "price": 15,
    "rating": "***",
    "accessories": ["warranty", "radar", "coffee warmer"],
    "details": {
      "powerSource": "pedalling",
      "consumptionPer100km": 1,
      "notes": "-"
    }
  }
]
```

### Test 4: searchValue silver

```json
[
  {
    "carID": 4,
    "model": "silver",
    "price": 15,
    "rating": "*****",
    "accessories": ["speedometer", "hook", "clock"],
    "details": {
      "powerSource": "gasoline",
      "consumptionPer100km": 6,
      "notes": "low emission"
    }
  },
  {
    "carID": 5,
    "model": "silver",
    "price": 200,
    "rating": "**",
    "accessories": ["hook", "warranty", "coffee warmer"]
  }
]
```

### Test 5: searchValue x

returns []

### Test 6: missing parameter

If parameter is missing, throws an exception, 'missing parameter'
