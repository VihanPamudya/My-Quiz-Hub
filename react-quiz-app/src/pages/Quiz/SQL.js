import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Question from './Questio';
import Answer from './Answer';
import './Quiz.css'


export default class Quiz extends Component {

    state = {
        questions: {
            1: '1. What is the full form of SQL?',
            2: '2. Which of the following is not a valid SQL type?',
            3: '3. Which of the following is not a DDL command?',
            4: '4. Which statement is used to delete all rows in a table without having the action logged?',
            5: '5. SQL Views are also known as?',
            6: '6. How many Primary keys can have in a table?',
            7: '7. Which datatype can store unstructured data in a column?',
            8: '8. Which of the following is not Constraint in SQL?',
            9: '9. Which of the following is not a valid aggregate function?',
            10: '10. Which operator is used to compare a value to a specified list of values?'
        },
        answers: {
            1: {
                1: 'Structured Query List',
                2: 'Structure Query Language',
                3: 'Sample Query Language',
                4: 'None of these'
            },
            2: {
                1: 'FLOAT',
                2: 'NUMERIC',
                3: 'DECIMAL',
                4: 'CHARACTER'
            },
            3: {
                1: 'TRUNCATE',
                2: 'ALTER',
                3: 'CREATE',
                4: 'UPDATE'
            },
            4: {
                1: 'DELETE',
                2: 'REMOVE',
                3: 'DROP',
                4: 'TRUNCATE'
            },
            5: {
                1: 'Simple tables',
                2: 'Virtual tables',
                3: 'Complex tables',
                4: 'Actual Tables'
            },
            6: {
                1: 'Only 1',
                2: 'Only 2',
                3: 'Depends on no of Columns',
                4: 'Depends on DBA'
            },
            7: {
                1: 'CHAR',
                2: 'RAW',
                3: 'NUMERIC',
                4: 'VARCHAR'
            },
            8: {
                1: 'Primary Key',
                2: 'Not Null',
                3: 'Check',
                4: 'Union'
            },
            9: {
                1: 'COUNT',
                2: 'COMPUTE',
                3: 'SUM',
                4: 'MAX'
            },
            10: {
                1: 'ANY',
                2: 'BETWEEN',
                3: 'ALL',
                4: 'IN'
            }
        },
        correctAnswers: {
            1: '2',
            2: '3',
            3: '4',
            4: '4',
            5: '2',
            6: '1',
            7: '2',
            8: '4',
            9: '2',
            10: '4'
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