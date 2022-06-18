import React, {useEffect} from "react";
import styled from "styled-components";
import SpotlightCard from "./SpotlightCard";

import { joshuaSpotlightData } from "../../data/joshuaSpotlightData";
import JoshuaImage1 from "../../images/JoshuaImage1.jpg";
import JoshuaImage2 from "../../images/JoshuaImage2.jpg";
import JoshuaImage3 from "../../images/JoshuaImage3.jpg";
import Hooked_on_a_Feeling from "../../music/Hooked_on_a_Feeling.mp3";


export default function HomePage(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <PageWrapper>
            <SpotlightCard image1={JoshuaImage2} image2={JoshuaImage3} image3={JoshuaImage1} 
                favoriteThingText={joshuaSpotlightData.favoriteThing} word1={joshuaSpotlightData.word1} word2={joshuaSpotlightData.word2}
                word3={joshuaSpotlightData.word3} paragraphText={joshuaSpotlightData.paragraph} mText1={joshuaSpotlightData.text1}
                mText2={joshuaSpotlightData.text2} mText3={joshuaSpotlightData.text3} favoriteSong={joshuaSpotlightData.favoriteSong}
                songRecording={Hooked_on_a_Feeling} spotlightName="Joshua"
                />
        </PageWrapper>
    )
}


const PageWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:100%;
    padding-top:40px;
    padding-bottom:60px;
    //margin-left:40px;
    .marginTop{
        margin-bottom:40px;
    }
    .marginBottom{
        margin-bottom:var(--marginBottom);
    }
`;