/*Part 1

Write a TypeScript function that returns a promise. 
The promise should resolve if a certain condition is met, 
and reject if it’s not. 

*/

const flipCoin = (): Promise<string> =>
{
    return new Promise((resolve, reject) =>
    {
        let result = Math.random();
        if (result > 0.5)
        {
            resolve("Heads");
        }
        else
        {
            resolve("Tails");
        }
});
};

flipCoin()
    .then((message: string) =>
        {
            console.log(message);
        })
    .catch((error: string) =>
    {
        console.log(error);
    });

//--------------------------------------------------------------

/*Part 2

Fetch data from the API and handle it using .then() for success and .catch() for errors. 
If the API gives you data, display it on the console. 

*/

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

const fetchTriviaQuestions = () => {
    fetch("https://opentdb.com/api.php?amount=10&category=17&difficulty=easy")
        .then((response: Response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json() as Promise<TriviaResponse>;
        })
        .then((data: TriviaResponse) => {
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
        })
        .catch((error: unknown) => {
            console.error("Error fetching trivia questions", error);
        });
};

fetchTriviaQuestions();




