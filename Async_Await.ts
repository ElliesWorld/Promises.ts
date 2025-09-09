/*Part 1

Write a TypeScript function that returns a promise. 
The promise should resolve if a certain condition is met, 
and reject if it’s not. 

Refactor the function to use async/await instead of the .then() 
method to resolve or reject the promise.  

*/
/*
const flipCoin = () =>
{
    return new Promise((resolve, reject) =>
    {
    const outcome = Math.random() > 0.5;
    outcome ? resolve("You win") : reject("You loose");
});
}

const flipCoinResult = async () =>
{
    try
    {
        const result = await flipCoin();
        console.log(result);
    }
    catch (error)
    {  
        console.log(error);
    }
}

flipCoinResult();
*/
//--------------------------------------------------------------

/*Part 2

Fetch data from the API and handle it using .then() for success and .catch() for errors. 
If the API gives you data, display it on the console.

Refactor the .then() and .catch() blocks to use async/await 
and convert the function into an arrow function.  
*/
/*
//What we recieved from the console.log raw data from the API
type Question = {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
};

type TriviaResponse = {
    response_code: number;
    results: Question[];
};

const TriviaQuestions = async () => {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=10&category=17&difficulty=easy");
        const data: TriviaResponse = await response.json();

        //console.log(data); (For checking and later defining what types we will use for the response)
        if (data.response_code !== 0) {
            throw new Error("Failed with response code: " + data.response_code);
        }

        // Looping through each question and logging the question and the answer.
        data.results.forEach((question: Question, index: number) => {
            // Print the question number and the question itself.
            console.log(`Question ${index + 1}: ${question.question}`);
            console.log(`Correct Answer: ${question.correct_answer}`);
            console.log("------------------------");
        });
    } catch (error) {
        console.error("Error fetching trivia questions", error);
    }
};

TriviaQuestions();

*/

//------------------------------------------------------------------------------
//Part 3

const flipCoin = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        let result = Math.random();
        if (result > 0.5) {
            resolve("Heads");
        } else {
            reject("Tails");
        }
    });
};

type Question = {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
};

type TriviaResponse = {
    response_code: number;
    results: Question[];
};

const TriviaQuestionsFlipCoin = async (): Promise<void> => {
    try {
        const coinResult = await flipCoin();
        console.log(`Coin flip result: ${coinResult}`);
        console.log("Heads, you get a question! Fetching trivia questions...");

        const response = await fetch("https://opentdb.com/api.php?amount=1&category=17&difficulty=easy");
        const data: TriviaResponse = await response.json();

        //console.log(data); (For checking and later defining what types we will use for the response)
        if (data.response_code !== 0) {
            throw new Error("Failed with response code: " + data.response_code);
        }

        // Looping through each question and logging the question and the answer.
        data.results.forEach((question: Question, index: number) => {
            // Print the question number and the question itself.
            console.log(`Question ${index + 1}: ${question.question}`);
            console.log(`Correct Answer: ${question.correct_answer}`);
            console.log("------------------------");
        });

    } catch (error) {
        if (error === "Tails") {
            console.log("Coin flip result: Tails");
            console.log("You lost! No trivia questions this time. Better luck next time!");
        } else {
            console.error("Error fetching trivia questions:", error);
        }
    }
};

TriviaQuestionsFlipCoin();
