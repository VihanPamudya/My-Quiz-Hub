import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Question from './Questio';
import Answer from './Answer';
import './Quiz.css'


export default class Quiz extends Component {

    state = {
        questions: {
            1: '1. Everything in React is a ________',
            2: '2. In which directory React Components are saved?',
            3: '3. How many elements does a react component return?',
            4: '4. What is ReactJS?',
            5: '5. In React what is used to pass data to a component from outside?',
            6: '6. How can you access the state of a component from inside of a member function?',
            7: '7. Props are __________ into other components',
            8: '8. What is a react.js in MVC?',
            9: '9. ReactJS uses _____ to increase performance',
            10: '10. Who Develop React.js?'
        },
        answers: {
            1: {
                1: 'Module',
                2: 'Component',
                3: 'Package',
                4: 'Class'
            },
            2: {
                1: 'Inside js/components/',
                2: 'Inside vendor/components/',
                3: 'Inside external/components/',
                4: 'Inside vendor/'
            },
            3: {
                1: '2 Elements',
                2: '1 Element',
                3: 'Multiple Elements',
                4: 'None of These'
            },
            4: {
                1: 'Server side Framework',
                2: 'User-interface framework',
                3: 'A Library for building interaction interfaces',
                4: 'None of These'
            },
            5: {
                1: 'setState',
                2: 'render with arguments',
                3: 'props',
                4: 'PropTypes'
            },
            6: {
                1: 'this.getState()',
                2: 'this.values',
                3: 'this.prototype.stateValue',
                4: 'this.state'
            },
            7: {
                1: 'Methods',
                2: 'Injected',
                3: 'Both 1 & 2',
                4: 'All of the above'
            },
            8: {
                1: 'Middleware',
                2: 'Controller',
                3: 'Model',
                4: 'Router'
            },
            9: {
                1: 'Original DOM',
                2: 'Virtual DOM',
                3: 'Both 1 & 2',
                4: 'None of above'
            },
            10: {
                1: 'Apple',
                2: 'Facebook',
                3: 'Twitter',
                4: 'Google'
            }
        },
        correctAnswers: {
            1: '2',
            2: '1',
            3: '3',
            4: '3',
            5: '3',
            6: '2',
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