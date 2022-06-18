import React, {useEffect} from "react";
import styled from "styled-components";
import SpotlightCard from "./SpotlightCard";
import Sarah1 from "../../images/Sarah1.jpg";
import Book1 from "../../images/Book1.jpg";
import Sarah2 from "../../images/Sarah2.jpg"
import Dad43 from "../../images/Dad43.jpg";
import { sarahSpotlightData } from "../../data/sarahSpotlightData";
import Aint_No_Mountain from "../../music/Aint_No_Mountain.mp3";

export default function SarahSpotlight(){
    return (
        <PageWrapper>
            <SpotlightCard image1={Sarah2} image2={Book1} favoriteThingText={sarahSpotlightData.favoriteThing}
                word1={sarahSpotlightData.word1} word2={sarahSpotlightData.word2}
                word3={sarahSpotlightData.word3} paragraphText={sarahSpotlightData.paragraph}
                image3={Dad43} mText1={sarahSpotlightData.text1} mText2={sarahSpotlightData.text2}
                mText3={sarahSpotlightData.text3} favoriteSong={sarahSpotlightData.favoriteSong}
                songRecording={Aint_No_Mountain} spotlightName="Sarah"/>
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