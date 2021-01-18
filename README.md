# TDD Exercises

## Exercise 1
Objectives:
	- Familiarize with the TDD flow
	- Familiarize with Jest syntax and structure

Test drive a function fizzbuzz() which takes in an integer.
It returns "lazy" if number is a multiple of 3.
It returns "chiru" if number is a multiple of 5.
It returns "lazy chiru" if it is both a multiple of 3 and 5.
Return an empty string if it is neither a multiple of 3 or 5.

## Exercise 2
Objectives:
- Code refactoring
- Testing for exceptions
- Mocking dependencies
From exercise 1, add some validations to check the parameter passed into fizzbuzz() is valid. fizzbuzz should call a separate function to validate this. Throw an exception if the parameter is invalid.

Emphasis on this exercise is on updating code and tests, and testing for exceptions.

## Exercise 3
Objectives:
- Familiarize with supertest
- Testing async functions

Implement Exercise 2 in an Express application. Create a GET API on route /fizzbuzz which takes in a query parameter called "number". The API should in turn call the fizzbuzz function and return the result in JSON format:
e.g. `{"result": "chiru"} `

If query is invalid, return status 400.

## Exercise 4
Objectives:
- Testing with databases
- Jest test lifecycle methods

From exercise 3, store the numbers called with fizzbuzz in a mongo collection. Numbers which has been called cannot be repeated. If a repeated number is called, return status 400.

