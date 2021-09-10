import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Question from './Questio';
import Answer from './Answer';
import './Quiz.css'


export default class Quiz extends Component {

    state = {
        questions: {
            1: '1. Which of the following statement is correct for AngularJS?',
            2: '2. On which of the Architectural pattern AngularJS is based?',
            3: '3. AngularJS is perfect for?',
            4: '4. Which of the following is the correct syntax for writing AngularJS expressions?',
            5: '5. Which of the following directive is used to bind the application data to the HTML view in AngularJS?',
            6: '6. Which of the following syntax is correct for applying multiple filters in AngularJS?',
            7: '7. Which of the following statement is true about the lowercase filter?',
            8: '8. Which of the following is an advantage of AngularJS?',
            9: '9. Which of the following statement is true about $dirty flag?',
            10: '10. What is the use of Angular Controllers in the application?'
        },
        answers: {
            1: {
                1: 'AngularJS is an HTML framework',
                2: 'AngularJS is a Java framework',
                3: 'AngularJS is a JavaScript framework',
                4: 'AngularJS is a SQL framework'
            },
            2: {
                1: 'Observer Pattern',
                2: 'Decorator pattern',
                3: 'MVC Architecture pattern',
                4: 'MVVM Architectural pattern'
            },
            3: {
                1: 'SPAs',
                2: 'MPAs',
                3: 'DPAs',
                4: 'CPAs'
            },
            4: {
                1: '(expression)',
                2: '{{expression}}',
                3: '{{{expression}}}',
                4: '[expression]'
            },
            5: {
                1: 'ng-app directive',
                2: 'ng-model directive',
                3: 'ng-bind directive',
                4: 'ng-init directive'
            },
            6: {
                1: '{{ expression | filter1 | filter2 | ... }}',
                2: '{{ expression | {filter1} | {filter2} | ... }}',
                3: '{{ expression - {filter1} - {filter2} - ... }}',
                4: '{{ {filter1} | {filter2} | ...-expression}}'
            },
            7: {
                1: 'The lowercase filter converts a text to lower case text',
                2: 'The lowercase filter is a function that takes text as input.',
                3: 'Both of the above',
                4: 'None of the above.'
            },
            8: {
                1: 'AngularJS code is unit testable',
                2: 'AngularJS provides reusable components',
                3: 'AngularJS uses dependency injection and makes use of separation of concerns.',
                4: 'All of the above'
            },
            9: {
                1: '$dirty flag is used to state that value has been changed',
                2: '$dirty flag is used to state that the form has invalid data',
                3: 'Both of the above',
                4: 'None of the above'
            },
            10: {
                1: 'Angular controllers are used for controlling the data',
                2: 'Angular controllers are used for displaying the data',
                3: 'Both of the above are correct',
                4: 'None of the above is correct'
            }
        },
        correctAnswers: {
            1: '3',
            2: '4',
            3: '1',
            4: '2',
            5: '3',
            6: '1',
            7: '1',
            8: '4',
            9: '1',
            10: '1'
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