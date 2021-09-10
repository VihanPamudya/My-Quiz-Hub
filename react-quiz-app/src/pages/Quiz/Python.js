import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Question from './Questio';
import Answer from './Answer';
import './Quiz.css'


export default class Quiz extends Component {

    state = {
        questions: {
            1: '1. What is the maximum possible length of an identifier?',
            2: '2. What do we use to define a block of code in Python language?',
            3: '3. Which character is used in Python to make a single line comment?',
            4: '4. Which of the following statements is correct regarding the object-oriented programming concept in Python?',
            5: '5. What is the method inside the class in python language?',
            6: '6. Which of the following declarations is incorrect?',
            7: '7. Which of the following is not a keyword in Python language?',
            8: '8. Which of the following declarations is incorrect in python language?',
            9: '9. Which of the following operators is the correct option for power(ab)?',
            10: '10. Which of the following functions is a built-in function in python language?'
        },
        answers: {
            1: {
                1: '16',
                2: '32',
                3: '64',
                4: 'None of these above'
            },
            2: {
                1: 'Key',
                2: 'Brackets',
                3: 'Indentation',
                4: 'None of these above'
            },
            3: {
                1: '/',
                2: '//',
                3: '#',
                4: '!'
            },
            4: {
                1: 'Classes are real-world entities while objects are not real',
                2: 'Objects are real-world entities while classes are not real',
                3: 'Both objects and classes are real-world entities',
                4: 'All of the above'
            },
            5: {
                1: 'Object',
                2: 'Function',
                3: 'Attribute',
                4: 'Argument'
            },
            6: {
                1: '_x = 2',
                2: 'x = 3',
                3: '__xyz = 5',
                4: 'None of the above'
            },
            7: {
                1: 'val',
                2: 'raise',
                3: 'try',
                4: 'with'
            },
            8: {
                1: 'xyzp = 5,000,000',
                2: 'x y z p = 5000 6000 7000 8000',
                3: 'x,y,z,p = 5000, 6000, 7000, 8000',
                4: 'x_y_z_p = 5,000,000'
            },
            9: {
                1: 'a ^ b',
                2: 'a**b',
                3: 'a ^ ^ b',
                4: 'a ^ * b'
            },
            10: {
                1: 'val()',
                2: 'print()',
                3: 'print()',
                4: 'None of these'
            }
        },
        correctAnswers: {
            1: '4',
            2: '3',
            3: '3',
            4: '2',
            5: '2',
            6: '4',
            7: '1',
            8: '2',
            9: '2',
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