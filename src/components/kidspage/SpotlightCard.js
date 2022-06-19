import React, {useState} from "react";
import styled from "styled-components";
import CommonModal from "../common/CommonModal";
import ReactAudioPlayer from "react-audio-player";


export default function ImageCard({
    image1, 
    image2, 
    image3, 
    favoriteThingText, 
    word1, 
    word2, 
    word3, 
    paragraphText, 
    mText1, 
    mText2, 
    mText3,
    favoriteSong,
    songRecording,
    spotlightName
}){
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2]  = useState(false);
    const [showModal3, setShowModal3] = useState(false);

    const handleClickPic1 = (e) =>{
        setShowModal1(true);
    }
    const handleClickPic2 = (e) =>{
        setShowModal2(true);
    }
    const handleClickPic3 = (e) =>{
        setShowModal3(true);
    }
    return(
        <PageWrapper>
            <div className="overall-wrapper">
                <h1>{spotlightName}</h1>
                <div className="gallery-wrapper">
                    <img className="sqr" src={image1} onClick={handleClickPic1}/>
                    <CommonModal setShowModal={setShowModal1} showModal={showModal1} text={mText1}/>
                    <img className="sqr" src={image2} onClick={handleClickPic2}/>
                    <CommonModal setShowModal={setShowModal2} showModal={showModal2} text={mText2}/>
                    <img className="sqr" src={image3} onClick={handleClickPic3}/>
                    <CommonModal setShowModal={setShowModal3} showModal={showModal3} text={mText3}/>
                </div>
                <div className="column-wrapper">
                    <h2>One of my Favorite Things About You</h2>
                    <div>{favoriteThingText}</div>
                    <h2>Three Describing Words</h2>
                    <ul>
                        <li>{word1}</li>
                        <li>{word2}</li>
                        <li>{word3}</li>
                    </ul>
                    <h2>My Guess at Your Favorite Song</h2>
                    {/* <div>{favoriteSong}</div> */}
                    {songRecording &&(
                        <ReactAudioPlayer
                        src={songRecording}
                        autoPlay={false}
                        loop={false}
                        controls={true}
                        />
                    )}
                    {!songRecording &&(
                        <p>{favoriteSong}</p>
                    )}
                   
                    <h2>To Dad:</h2>
                    <div>{paragraphText}</div>
                </div>
            </div>
            
        </PageWrapper>
    )
}


const PageWrapper = styled.div`
    /* display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    justify-content:left;
    margin-left:15px;
    margin-right:15px; */
    .overall-wrapper{
        display:flex;
        flex-flow: column wrap !important;
        padding:10px;
        flex-wrap:wrap;
        align-items:center;
        justify-content:center;
        max-width:1200px;
        background-color:var(--cardGrey);
        border-radius: 10px;
        font-size: 1.2rem;
    }
    .gallery-wrapper{
        display:flex;
        flex-direction:row;
        //flex-flow: row wrap;
        justify-items: center;
        justify-content: center;
        align-items: center;
    }
    .column-wrapper{
        display:flex;
        flex-direction:column;
        float:left;
        flex-wrap:wrap;
        //max-width:600px;
    }
    h2{
        margin-bottom:5px;
    }
    ul{
        margin-top:5px;
    }
    .sqr {
    --size: 200px;
  
    height: var(--size);
    width: var(--size);
    border-radius: calc(var(--size) * 0.15);
    background: {
      image: var(--img);
      size: cover;
      repeat: no-repeat;
    }
    position: relative;
    box-shadow: 2.5px 2.5px 2.5px var(--darkGrey);
  
    &::after {
      content: "";
      position: absolute;
      width: calc(var(--size) * 0.8);
      height: 100%;
      top: calc(var(--size) * 0.05);
      left: 50%;
      transform: translateX(-50%);
      background: {
        image: var(--img);
        size: cover;
        repeat: no-repeat;
      }
      z-index: -1;
      filter: blur(20px) opacity(70%);
    }
  }  
  .sqr:hover{
      box-shadow: 5px 5px 5px var(--darkGrey);
  }
  
  .sqr {
    margin: 10px;
  }
`;