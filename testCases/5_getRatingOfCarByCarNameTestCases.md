# Test cases for getRatingOfCarByCarName

## **get_rating_of_car_by_carname(searchKey)**

Returns rating of the car matching the car name

- searchKey is the name of the car
- returns the rating of car matching the searchKey carname or null if no match is found
- if a parameter searchKey is missing, throws an exeption `'missing parameter'`

## Tests

### Test 1: searchKey chrome

returns

```json
"***"
```

### Test 2: searchKey gold

```json
"**"
```

### Test 3: searchKey GT

```json
"***"
```

### Test 4: searchKey silver

```json
"*****"
"**"
```

### Test 5: searchKey not found

returns null

### Test 6: missing parameter

If a parameter searchKey is missing, throws an exeption 'missing parameter'
