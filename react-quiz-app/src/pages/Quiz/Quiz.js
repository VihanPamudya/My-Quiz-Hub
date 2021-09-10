import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Question from './Questio';
import './Quiz.css'
import Answer from "./Answer";


export default class Quiz extends Component{

    state = {
        questions: {
            1: '1. HTML stands for?',
            2: '2. The correct sequence of HTML tags for starting a webpage is?',
            3: '3. Which of the following element is responsible for making the text bold in HTML??',
            4: '4. Which of the following tag is used for inserting the largest heading in HTML?',
            5: '5. Which of the following tag is used to insert a line-break in HTML?',
            6: '6. How to create an unordered list (a list with the list items in bullets) in HTML?',
            7: '7.  Which of the following element is responsible for making the text italic in HTML?',
            8: '8. How to insert an image in HTML?',
            9: '9.  How to add a background color in HTML?',
            10: '10. <input> is?'
        },
        answers: {
            1: {
                1: 'HighText Machine Language',
                2: 'HyperText and links Markup Language',
                3: 'HyperText Markup Language',
                4: 'None of these'
            },
            2: {
                1: 'Head, Title, HTML, body',
                2: 'HTML, Body, Title, Head',
                3: 'HTML, Head, Title, Body',
                4: 'HTML, Head, Body, Title'
            },
            3: {
                1: '<pre>',
                2: '<a>',
                3: '<b>',
                4: '<br>'
            },
            4: {
                1: '<h3>',
                2: '<h1>',
                3: '<h5>',
                4: '<h6>' 
            },
            5: {
                1: '<br>',
                2: '<a>',
                3: '<pre>',
                4: '<b>' 
            },
            6: {
                1: '<ul>',
                2: '<ol>',
                3: '<li>',
                4: '<i>' 
            },
            7: {
                1: '<i>',
                2: '<italic>',
                3: '<it>',
                4: '<pre>' 
            },
            8: {
                1: '<img href = "img.png" />',
                2: '<img url = "img.png" />',
                3: '<img link = "img.png" />',
                4: '<img src = "img.png" />' 
            },
            9: {
                1: '<marquee bg color: "red">',
                2: '<marquee bg-color = "red">',
                3: '<marquee bgcolor = "red">',
                4: '<marquee color = "red">' 
            },
            10: {
                1: 'a format tag',
                2: 'an empty tag',
                3: 'All of the above',
                4: 'None of the above' 
            }
        },
        correctAnswers: {
            1: '3',
            2: '3',
            3: '3',
            4: '2',
            5: '1',
            6: '1',
            7: '1',
            8: '4',
            9: '3',
            10: '2'
        },
        correctAnswer : 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
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
    

    render(){
        let { questions,correctAnswer, clickedAnswer, answers , step,score} = this.state;
        return(
            <div className="Quiz" style={{textAlign:'center'}}>
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
                            <p>Your score is: <span style={{color:'red'}}>{score}</span> of {Object.keys(questions).length}</p>
                            <p>Thank you!</p>
                            <button><Link to="/mainpage">Main Page</Link></button>
                        </div>
                    )
                }
            </div>
        );
    }
}