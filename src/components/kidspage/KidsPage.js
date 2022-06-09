import React, {useEffect} from "react";
import styled from "styled-components";
import ReactWordcloud from 'react-wordcloud';
import SarahSpotlight from "./SarahSpotlight";
import CalebSpotlight from "./CalebSpotlight";
import JoshuaSpotlight from "./JoshuaSpotlight";


export default function KidsPage(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <PageWrapper>
            <SarahSpotlight/>
            <CalebSpotlight/>
            <JoshuaSpotlight/>
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