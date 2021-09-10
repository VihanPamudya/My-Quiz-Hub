import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Question from './Questio';
import Answer from './Answer';
import './Quiz.css'


export default class Quiz extends Component {

    state = {
        questions: {
            1: '1. CSS stands for?',
            2: '2. Which of the following is the correct syntax for referring the external style sheet?',
            3: '3. The property in CSS used to change the background color of an element is?',
            4: '4. The property in CSS used to change the text color of an element is?',
            5: '5. The CSS property used to control the elements font-size is?',
            6: '6. The HTML attribute used to define the inline styles is?',
            7: '7.  Which of the following CSS property is used to set the background image of an element?',
            8: '8. Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?',
            9: '9. Which of the following is the correct syntax to display the hyperlinks without any underline?',
            10: '10. Are the negative values allowed in padding property?'
        },
        answers: {
            1: {
                1: 'Cascade style sheets',
                2: 'Color and style sheets',
                3: 'Cascading style sheets',
                4: 'None of the above'
            },
            2: {
                1: '<style src = example.css>',
                2: '<style src = "example.css" >',
                3: '<stylesheet> example.css </stylesheet>',
                4: '<link rel="stylesheet" type="text/css" href="example.css">'
            },
            3: {
                1: 'bgcolor',
                2: 'color',
                3: 'background-color',
                4: 'All of the above'
            },
            4: {
                1: 'bgcolor',
                2: 'color',
                3: 'background-color',
                4: 'All of the above'
            },
            5: {
                1: 'text-style',
                2: 'text-size',
                3: 'font-size',
                4: 'None of the above'
            },
            6: {
                1: 'style',
                2: 'styles',
                3: 'class',
                4: 'None of the above'
            },
            7: {
                1: 'background-attachment',
                2: 'background-image',
                3: 'background-color',
                4: 'None of the above'
            },
            8: {
                1: 'p {background-color : yellow;}',
                2: 'p {background-color : #yellow;}',
                3: 'all {background-color : yellow;}',
                4: 'all p {background-color : #yellow;}'
            },
            9: {
                1: 'a {text-decoration : underline;}',
                2: 'a {decoration : no-underline;}',
                3: 'a {text-decoration : none;}',
                4: 'None of the above'
            },
            10: {
                1: 'Yes',
                2: 'No',
                3: 'Can not say',
                4: 'May be'
            }
        },
        correctAnswers: {
            1: '3',
            2: '4',
            3: '3',
            4: '2',
            5: '3',
            6: '1',
            7: '2',
            8: '1',
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