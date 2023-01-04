import React from 'react'
import { google, shopify, slack, atlassian, dropbox} from './imports';
import '../brand/brand.css';

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt="google"></img>
      </div>

      <div>
        <img src={slack} alt="slack"></img>
      </div>

      <div>
        <img src={dropbox} alt="google"></img>
      </div>

      <div>
        <img src={atlassian} alt="artlassian"></img>
      </div>

      <div>
        <img src={shopify} alt="shopify"></img>
      </div>





      


    </div>
  )
}

export default Brand
