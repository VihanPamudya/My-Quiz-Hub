import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Question from './Questio';
import Answer from './Answer';
import './Quiz.css'


export default class Quiz extends Component {

    state = {
        questions: {
            1: '1. Which type of JavaScript language is?',
            2: '2. Which one of the following also known as Conditional Expression?',
            3: '3. In JavaScript, what is a block of statement?',
            4: '4. When interpreter encounters an empty statements, what it will do?',
            5: '5. The "function" and " var" are known as?',
            6: '6. Which of the following variables takes precedence over the others if the names are the same?',
            7: '7. Which of the following type of a variable is volatile?',
            8: '8. Which of the following option is used as hexadecimal literal beginning?',
            9: '9. In the JavaScript, which one of the following is not considered as an error?',
            10: '10. Which of the following number object function returns the value of the number?'
        },
        answers: {
            1: {
                1: 'Object-Oriented',
                2: 'Object-Based',
                3: 'Assembly-language',
                4: 'High-level'
            },
            2: {
                1: 'Alternative to if-else',
                2: 'Switch statement',
                3: 'If-then-else statement',
                4: 'immediate if'
            },
            3: {
                1: 'Conditional block',
                2: 'block that combines a number of statements into a single compound statement',
                3: 'both conditional block and a single statement',
                4: 'block that contains a single statement'
            },
            4: {
                1: 'Shows a warning',
                2: 'Prompts to complete the statement',
                3: 'Throws an error',
                4: 'Ignores the statements'
            },
            5: {
                1: 'Keywords',
                2: 'Data types',
                3: 'Declaration statements',
                4: 'Prototypes'
            },
            6: {
                1: 'Global variable',
                2: 'The local element',
                3: 'The two of the above',
                4: 'None of the above'
            },
            7: {
                1: 'Mutable variable',
                2: 'Dynamic variable',
                3: 'Volatile variable',
                4: 'Immutable variable'
            },
            8: {
                1: '00',
                2: '0x',
                3: '0X',
                4: 'Both 0x and 0X'
            },
            9: {
                1: 'Syntax error',
                2: 'Missing of semicolons',
                3: 'Division by zero',
                4: 'Missing of Bracket'
            },
            10: {
                1: 'toString()',
                2: 'valueOf()',
                3: 'toLocaleString()',
                4: 'toPrecision()'
            }
        },
        correctAnswers: {
            1: '2',
            2: '4',
            3: '2',
            4: '4',
            5: '3',
            6: '2',
            7: '1',
            8: '4',
            9: '3',
            10: '2'
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