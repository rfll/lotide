# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rfll/lotide`

**Require it:**

`const _ = require('@rfll/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Calls eqArrays and logs a message to the console if two arrays are equal or not.
* `assertEqual(string1, string2)`: Checks whether two primitive values are equal. Logs a message whether equal or not.
* `assertObjectsEqual(object1, object2)`: Calls eqObjects and logs a message whether two objects are equal or not.
* `countLetters(string)`: Counts the number of characters in a string. Spaces are not counted.
* `countOnly(array, object)`: Counts the array elements that are specified in the object properties.
* `eqArrays(array1, array2)`: Determines if two arrays are equal.
* `eqObjects(object1, object2)`: Determines if two objects are equal.
* `findKey(object, callback)`: Finds an object key based on the callback condition.
* `findKeyByValue(object, string)`: Finds an object key based on its value.
* `head(array)`: Returns the first item in an array.
* `letterPositions(string)`: Changes a string into an object. The string characters are object keys and the character indexes are object values in an array.
* `map(array, callback)`: Takes an array of strings and returns the character of the string based on the index in the callback.
* `middle(array)`: Returns the middle element of an array. When an array has an even number of elements, it returns the two middle elements.
* `tail(array)`: Returns every element in an array, except the first element.
* `takeUntil(array, callback)`: Returns elements in an array until callback truthy value is met.
* `without(array1, array2 )`: Returns an altered version of array 1, without the elements in array 2.