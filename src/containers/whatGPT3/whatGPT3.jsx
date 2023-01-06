import React from 'react'
import { Feature } from '../../components';
import '../whatGPT3/whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__padding" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT3?" text="GPT-3 Generative Pretrained Transformer 3 is a state-of-the-art language processing AI model developed by OpenAI. It is capable of generating human-like text and has a wide range of applications, including language translation, language modelling, and generating text for applications such as chatbots. It is one of the largest and most powerful language processing AI models to date, with 175 billion parameters."/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text"> The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text=""/>
        <Feature title="Knowledgebase" text=""/>
        <Feature  title="Education" text=""/>
      </div>
    </div>
  )
}

export default WhatGPT3