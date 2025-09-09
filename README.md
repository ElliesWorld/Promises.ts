# JavaScript Promises and Async/Await
This project shows how to use Promises and get data from an online API. 
It is written in TypeScript, which helps by letting us define the exact structure of the data we expect to get from the API.

## Part 1: Promises
This code shows how a Promise works. 
The flipCoin function is like flipping a coin. 
It will either succeed with a result ("Heads" or "Tails") or fail.

The .then() part of the code runs if the promise succeeds, 
and the .catch() part runs if there's an error.

## Part 2: Fetching Data from an API
This part of the code uses the fetch command to get trivia questions from a website.

The fetchTriviaQuestions function asks for 10 easy questions. 
It uses .then() to display the questions if it gets them successfully. 
If there is a problem, the .catch() part will show an error message.

# Async and Await

Refactored the promises using async/await syntax instead of .then() and .catch(). for better readability and error handling.

## Part 1:
Takes the flipCoin function that returns a promise
Refactors it to use async/await instead of .then() method
Uses try/catch blocks for success and error handling instead of .then()/.catch()

## Part 2: 

Refactors the trivia API fetch function from promise chains to async/await
Converts the function into an arrow function format
Replaces .then() and .catch() blocks with try/catch structure
Maintains the same functionality but with cleaner, more readable syntax

## Part 3: 

Combined functionality: Integrates both the coin flip and API fetch into one function
Only fetches trivia questions if you "win" the coin flip (get "Heads")
Win condition: If coin lands on "Heads" → fetch and display one trivia question
Lose condition: If coin lands on "Tails" → show "better luck next time" message
Uses a single try/catch block to handle both coin flip results and API errors

