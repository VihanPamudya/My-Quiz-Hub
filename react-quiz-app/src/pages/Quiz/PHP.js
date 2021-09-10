import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Question from './Questio';
import Answer from './Answer';
import './Quiz.css'


export default class Quiz extends Component {

    state = {
        questions: {
            1: '1. PHP stands for?',
            2: '2. Variable name in PHP starts with?',
            3: '3. Which of the following is not a variable scope in PHP?',
            4: '4. Which of the following is correct to add a comment in php?',
            5: '5. Which of the following is used to display the output in PHP?',
            6: '6. Which of the following is the use of strlen() function in PHP?',
            7: '7. Which of the following is used for concatenation in PHP?',
            8: '8. Which of the following starts with __ (double underscore) in PHP?',
            9: '9. Which of the following is the use of strpos() function in PHP?',
            10: '10. Which of the following is the correct way to create a function in PHP?'
        },
        answers: {
            1: {
                1: 'Hypertext Preprocessor',
                2: 'Pretext Hypertext Preprocessor',
                3: 'Personal Home Processor',
                4: 'None of the above'
            },
            2: {
                1: '! (Exclamation)',
                2: '$ (Dollar)',
                3: '& (Ampersand)',
                4: '# (Hash)'
            },
            3: {
                1: 'Extern',
                2: 'Local',
                3: 'Static',
                4: 'Global'
            },
            4: {
                1: '& …… &',
                2: '// ……',
                3: '/* …… */',
                4: 'Both (b) and (c)'
            },
            5: {
                1: 'echo',
                2: 'write',
                3: 'print',
                4: 'Both (a) and (c)'
            },
            6: {
                1: 'The strlen() function returns the type of string',
                2: 'The strlen() function returns the length of string',
                3: 'The strlen() function returns the value of string',
                4: 'The strlen() function returns both value and type of string'
            },
            7: {
                1: '+ (plus)',
                2: '* (Asterisk)',
                3: '. (dot)',
                4: 'append()'
            },
            8: {
                1: 'Inbuilt constants',
                2: 'User-defined constants',
                3: 'Magic constants',
                4: 'Default constants'
            },
            9: {
                1: 'The strpos() function is used to search for the spaces in a string',
                2: 'The strpos() function is used to search for a number in a string',
                3: 'The strpos() function is used to search for a character/text in a string',
                4: 'The strpos() function is used to search for a capitalize character in a string'
            },
            10: {
                1: 'Create myFunction()',
                2: 'New_function myFunction()',
                3: 'function myFunction()',
                4: 'None of the above'
            }
        },
        correctAnswers: {
            1: '1',
            2: '2',
            3: '1',
            4: '4',
            5: '4',
            6: '2',
            7: '3',
            8: '3',
            9: '3',
            10: '3'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if (answer === correctAnswers[step]) {
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        } else {
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }


    render() {

        let { questions, correctAnswer, clickedAnswer, answers, step, score } = this.state;
        return (
            <div className="Quiz" style={{ textAlign: 'center' }}>
                {step <= Object.keys(questions).length ?
                    (<>

                        <Question
                            questions={questions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />

<Link to="/mainpage"><button className="quit">Quit</button></Link>

                        <button
                            className="NextStep"
                            disabled={
                                clickedAnswer && Object.keys(questions).length >= step
                                    ? false : true
                            }
                            onClick={() => this.nextStep(step)}>Next</button>
                    </>) : (
                        <div className="finalPage">
                            <h1>You have completed the quiz!</h1>
                            <p>Your score is: <span style={{ color: 'red' }}>{score}</span> of {Object.keys(questions).length}</p>
                            <p>Thank you!</p>
                            <button><Link to="/mainpage">Main Page</Link></button>
                        </div>
                    )
                }
            </div>
        );
    }
}