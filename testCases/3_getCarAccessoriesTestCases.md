# Test cases for getCarAccessories

## **get_car_accessories(searchKey)**

Returns an array of car accessories. If none found, returns an empty array.

- searchKey is the carID of the car
- returns accessories of the car as an array []
- if none is found or it is empty or the parameter, searchKey is missing, returns an empty array []

## Tests

### Test 1: searchKey 1

```json
["clock", "speedometer", "repair set"]
```

### Test 2: searchKey 2

```json
["coffee warmer", "clock", "radar"]
```

### Test 3: searchKey 3

```json
["warranty", "radar", "coffee warmer"]
```

### Test 4: searchKey 4

```json
["speedometer", "hook", "clock"]
```

### Test 5: searchKey 5

```json
["hook", "warranty", "coffee warmer"]
```

### Test 6: searchKey x

returns []

### Test 7: missing parameter

returns []
