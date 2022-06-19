import React, {useEffect} from "react";
import styled from "styled-components";
import ReactWordcloud from 'react-wordcloud';
import ReactAudioPlayer from "react-audio-player";
import {wordcloudData} from "../../data/wordcloudData";
import ImageCard from "../common/ImageCard";
import Dad1 from "../../images/Dad1.jpg";
import Dad2 from "../../images/Dad2.jpg"
import ImageGallery from "../common/ImageGallery";
import Mr_Blue_Sky from "../../music/Mr_Blue_Sky.mp3";



export default function HomePage(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <PageWrapper>
            <div className="first-row">
                <p>Welcome, Mr. Dad, to your super awesome website! We hope you enjoy looking through everything, from 
                    the wordcloud we created with words that describe you, to the pictures we chose for you. By the way, make sure to 
                    click on the pictures!
                </p>
                <ReactWordcloud words={wordcloudData} className="word-cloud"/>
            </div>
            
            <ImageGallery/>
            {/* <ReactAudioPlayer src={Mr_Blue_Sky}
                autoPlay={false}
                controls={true}
                loop={true}
                /> */}
            <div className="marginBottom"/>
            
        </PageWrapper>
    )
}


const PageWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:100%;
    padding-top:10px;
    padding-bottom:60px;
    //margin-left:40px;
    .top-column{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
    }
    .first-row{
        display:flex;
        flex-direction:row;
        margin-left:20px;
        margin-right:10px;
        font-size:1.5rem;
    }
    .word-cloud{
        max-width:1200px;
        max-height:400px;
    }
    .marginTop{
        margin-bottom:40px;
    }
    .marginBottom{
        margin-bottom:var(--marginBottom);
    }
    p{
        font-family: 'Times New Roman', Times, serif;
        padding: 10px;
        background-color:var(--cardGrey);
        border-radius: 10px;
        margin-bottom:20px;
    }
`;