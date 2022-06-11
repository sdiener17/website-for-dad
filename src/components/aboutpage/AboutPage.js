import React, {useEffect} from "react";
import styled from "styled-components";
import HexagonGallery from "../common/HexagonGallery";
import Dad11 from "../../images/Dad11.jpg";

export default function HomePage(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <PageWrapper>
            <HexagonGallery img1={Dad11} img2={Dad11} img3={Dad11} img4={Dad11} img5={Dad11} img6={Dad11}/>
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