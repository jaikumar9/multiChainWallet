import React from "react";
import mwallet from "../mwallet.png";
import {Button} from "antd";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <>
      <div className="content">
      <img src={mwallet} alt="logo" className="frontPageLogo"/> 
      <h2>Hey there 👋</h2>
      <h4 className="h4"> Welcome to the Singhteck Wallet.</h4>
        <Button className="frontPageButton" type="primary" 
         onClick={() => navigate("/yourwallet")}>
        Create a New Wallet 
        </Button>
        <Button className="frontPageButton" type="default"
         onClick={() => navigate("/recover")}>
        Sign In With the Seed Phrase
        </Button>
      
      <p className="frontPageBottom">
           Find Alt Coin Gems:{""}

          <a href="https://coinmarketcap.com/" target="_blank" rel="noreferrer">Next 100x Coin here</a>
      </p>


      </div>
    </>
  );
}

export default Home;
