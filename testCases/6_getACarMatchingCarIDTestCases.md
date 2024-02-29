# Test cases for getACarMatchingCarID

## **get_a_car_matching_carID(searchKey)**

Searches the datastorage for an object with given searchKey. Key is unique.

- searchKey is the primary key carID of the car

- returns the car object matching the carID or null if there is no match

- if parameter searchKey is missing, throws an exception 'missing parameter'

## Tests

### Test 1: searchKey 1

returns

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

### Test 2: searchKey 2

returns

```json
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
```

### Test 3: searchKey 3

returns

```json
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
```

### Test 4: searchKey 4

returns

```json
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
}
```

### Test 5: searchKey 5

returns

```json
{
  "carID": 5,
  "model": "silver",
  "price": 200,
  "rating": "**",
  "accessories": ["hook", "warranty", "coffee warmer"]
}
```

### Test 6: searchKey x

returns null

### Test 7: missing parameter

If parameter searchKey is missing, throws an exception 'missing parameter'
