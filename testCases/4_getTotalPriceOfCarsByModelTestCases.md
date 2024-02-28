# Test cases for getTotalPriceOfCarsByModel

## **get_total_price_of_cars_by_model(searchValue)**

Returns the total price of all cars that have the same model as the given searchValue

- searchValue is the model of the car to be searched.
- returns total cumulative price of cars matching the searchValue.
- if no car with the given searchValue is found, throws an exception 'nothing found with given searchValue'.
- if a parameter, searchValue is missing, throws an exception 'missing parameter'.

## Tests

### Test 1: searchValue chrome

returns 123

### Test 2: searchValue gold

returns 36

### Test 3: searchValue GT

returns 15

### Test 4: searchValue silver

returns 215

### Test 5: searchValue not found

If no car with searchValue is found, throws an exception 'nothing found with given searchValue'

### Test 6: missing parameter

If parameter is missing, throws an exception, 'missing parameter'
