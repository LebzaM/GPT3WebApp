import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
const Header = () => {
  return (
    <div className="gpt3__header section__padding">
      <div className="gpt3__header-content">
        <h1 className="gradient__text" id="home" > Let's Build Something Amazing with GPT-3 Open AI</h1>
        <p>The Future is Now.</p>
        <p>Sign up and get a news feed on intresting React projects to make using  OpenSeas Gpt3 API!</p>
        <div className="gpt__header-content__input">
          <input type="mail" placeholder="Please enter your email"></input>
          <button type="button">Get Started</button>

        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people"/> 
          <p>1200 people requested acccess already</p>
        </div>
        
        
  



      </div>
      <div className="gpt3_header-image">
          <img src={ai} alt="ai"/>
      </div>




    </div>
  )
}

export default Header