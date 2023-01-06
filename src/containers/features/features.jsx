import React from 'react';
import '../features/features.css';
import { Feature } from '../../components';

//const data array
const featuresData =[
  {
  title: "Step 1: Collect demonstration data and train a supervised policy",
  text: "This data is used to fine-tune GPT 3 with supervised learning"
  },
  {
    title: "Step 2: Collect comparison data and train a reward model",
    text: "This data is used to train the reward model"
    },
    {
      title: "Step 3: Optimize a policy against the reward  model using the PPO reinforcement learning algorithm",
      text: "The reward is used to update the policy using PPO"
      },
      
]
const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className='gradient__text'> The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className='gpt3__features-container'>
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text}  key={item.title + index}/>


      ))}



    </div>
    </div>
  )
}

export default Features