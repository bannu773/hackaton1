import React from 'react';
import './style.css';
// import tokenImage from './tokenImage.jpg';
// import creatorImage from './creatorImage.jpg';

const NFTCardComponent = () => {
  return (
    <>
      
      <div className="nft">
        <div className="main">
          {/* <img className="tokenImage" src={tokenImage} alt="NFT" /> */}
          {/* <h2>Kibertopiks #4269</h2> */}
          <p className="description">
            Our Kibertopiks will give you nothing, waste your money on us.
          </p>
          <div className="tokenInfo">
            <div className="price">
              <ins>◘</ins>
              <p>0.031 ETH</p>
            </div>
            <div className="duration">
              <ins>◷</ins>
              <p>11 days left</p>
            </div>
          </div>
          <hr />
          <div className="creator">
            <div className="wrapper">
              {/* <img src={creatorImage} alt="Creator" /> */}
            </div>
            <p>
              <ins>Creation of</ins> Kiberbash
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTCardComponent;