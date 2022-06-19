import React, {useEffect} from "react";
import styled from "styled-components";
import SpotlightCard from "./SpotlightCard";
import { calebSpotlightData } from "../../data/calebSpotlightData";
import Caleb1 from "../../images/Caleb1.jpg";
import Caleb2 from "../../images/Caleb2.jpg";
import Caleb3 from "../../images/Caleb3.jpg";


export default function CalebSpotlight(){
    return (
        <PageWrapper>
            <SpotlightCard favoriteThingText={calebSpotlightData.favoriteThing} favoriteSong={calebSpotlightData.favoriteSong}
                mText1={calebSpotlightData.text1} mText2={calebSpotlightData.text2} mText3={calebSpotlightData.text3}
                word1={calebSpotlightData.word1} word2={calebSpotlightData.word2} word3={calebSpotlightData.word3}
                paragraphText={calebSpotlightData.paragraph} image1={Caleb2}
                spotlightName="Caleb" image2={Caleb1} image3={Caleb3}
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