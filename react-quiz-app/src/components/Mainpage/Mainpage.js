import React from 'react';
import { Link } from "react-router-dom";
import './Mainpage.css'

const Main = () => {
  return (

    <div className='main' style={{ backgroundColor: "white" }}>
      <div className="logout">
        <Link to="/login"><button className="logout-button">Log out</button></Link>
      </div>
      <div class="cards-list" style={{ backgroundColor: "white" }}>



        <div class="card 1">
          <div class="card_image">
            <Link to="/Quiz"><img src="h.jpg" alt="quiz-category" /></Link>
          </div>
          <div class="card_title title-white">
            <p><Link to="/Quiz">HTML</Link></p>
          </div>
        </div>

        <div class="card 2">
          <div class="card_image">
            <Link to="/css"><img src="c.jpg" alt="quiz-category" /></Link>
          </div>
          <div class="card_title title-white">
            <p><Link to="/css">CSS</Link></p>
          </div>
        </div>

        <div class="card 3">
          <div class="card_image">
            <Link to="/js"><img src="j.jpg" alt="quiz-category" /></Link>
          </div>
          <div class="card_title title-white">
            <p><Link to="/js">JavaScript</Link></p>
          </div>
        </div>

        <div class="card 4">
          <div class="card_image" style={{ backgroundColor: "#154458" }}>
            <Link to="/python"><img src="python.png" alt="quiz-category" /></Link>
          </div>
          <div class="card_title title-white">
            <p><Link to="/python">Python</Link></p>
          </div>
        </div>

      </div>
      <div class="cards-list">

        <div class="card 1">
          <div class="card_image">
            <Link to="/php"><img src="p.jpg" alt="quiz-category" /></Link>
          </div>
          <div class="card_title title-white">
            <p><Link to="/php">PHP</Link></p>
          </div>
        </div>

        <div class="card 2">
          <div class="card_image">
            <Link to="/sql"><img src="s.jpg" alt="quiz-category" /></Link>
          </div>
          <div class="card_title title-white">
            <p><Link to="/sql">SQL</Link></p>
          </div>
        </div>

        <div class="card 3">
          <div class="card_image" style={{ backgroundColor: "black" }}>
            <Link to="/react"><img src="logo512.png" alt="quiz-category" /></Link>
          </div>
          <div class="card_title title-white">
            <p><Link to="/react">React</Link></p>
          </div>
        </div>

        <div class="card 4">
          <div class="card_image">
            <Link to="/angular"><img src="a.jpg" alt="quiz-category" /></Link>
          </div>
          <div class="card_title title-white">
            <p><Link to="/angular">Angular</Link></p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Main;