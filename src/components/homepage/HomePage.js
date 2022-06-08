import React, {useEffect} from "react";
import styled from "styled-components";
import ReactWordcloud from 'react-wordcloud';
import {wordcloudData} from "../../data/wordcloudData";
import ImageCard from "../common/ImageCard";
import Dad1 from "../../images/Dad1.jpg";
import Dad2 from "../../images/Dad2.jpg"
import ImageGallery from "../common/ImageGallery";


export default function HomePage(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <PageWrapper>
            <div className="top-column">
                <ImageCard image={Dad1}/>
                <ReactWordcloud words={wordcloudData}/>
                <ImageCard image={Dad2}/>
            </div>
            <ImageGallery/>
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
    padding-top:40px;
    padding-bottom:60px;
    //margin-left:40px;
    .top-column{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
    }
    .marginTop{
        margin-bottom:40px;
    }
    .marginBottom{
        margin-bottom:var(--marginBottom);
    }
`;