# JavaScript Promises
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
