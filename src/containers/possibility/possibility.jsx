import React from 'react';
import '../possibility/possibility.css';
import possibilityImage from '../../assets/possibility.png';
const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id="possibility">
    <div className='gpt3__possibility-image'>
      <img src={possibilityImage} alt="possibility"/>
    </div>
    <div className='gpt3__possibility-content'>
      <h4>Request Early Access To Get Started</h4>
      <h1 className='gradient__text'>What does the future hold for GPT3?</h1>
      <p>Chat GPT technology is not likely to replace people's jobs. While it is a powerful tool for automating conversations, it is still a long way from being able to replace the creative and interpersonal skills of human beings. GPT technology is best used to augment tasks, not replace them.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
    
    </div>
  )
}

export default Possibility