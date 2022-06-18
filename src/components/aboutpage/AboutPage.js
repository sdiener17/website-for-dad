import React, {useEffect} from "react";
import styled from "styled-components";
import HexagonGallery from "../common/HexagonGallery";
import ImageCard from "../common/ImageCard";
import { imageText } from "../../data/imageText";
import Dad11 from "../../images/Dad11.jpg";
import Dad13 from "../../images/Dad13.jpg";
import Dad7 from "../../images/Dad7.jpg";
import Dad5 from "../../images/Dad5.jpg";
import Dad14 from "../../images/Dad14.jpg";
import Dad33 from "../../images/Dad33.jpg";
import Dad32 from "../../images/Dad32.jpg";
import Dad31 from "../../images/Dad31.jpg";
import Dad29 from "../../images/Dad29.jpg";
import Dad40 from "../../images/Dad40.jpg";
import Dad18 from "../../images/Dad18.jpg";
import Dad17 from "../../images/Dad17.jpg";
import Dad22 from "../../images/Dad22.jpg";
import Dad3 from "../../images/Dad3.jpg";
import Dad41 from "../../images/Dad41.jpg";
import Dad44 from "../../images/Dad44.jpg";

export default function HomePage(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
      <PageWrapper>
        <HexagonGallery
          img1={Dad18}
          img2={Dad41}
          img3={Dad22}
          img4={Dad3}
          img5={Dad17}
          img6={Dad44}
          mText1={imageText.hexagon1}
          mText2={imageText.hexagon2}
          mText3={imageText.hexagon3}
          mText4={imageText.hexagon4}
          mText5={imageText.hexagon5}
          mText6={imageText.hexagon6}
        />
        <p>
          You're always making funny faces for the camera, so we thought we'd
          include a small sampling of them
        </p>
        <div className="sqrs">
          <ImageCard image={Dad11} mText={imageText.aboutGallery1} />
          <ImageCard image={Dad13} mText={imageText.aboutGallery2} />
          <ImageCard image={Dad7} mText={imageText.aboutGallery3} />
          <ImageCard image={Dad5} mText={imageText.aboutGallery4} />
          <ImageCard image={Dad14} mText={imageText.aboutGallery5} />
        </div>
        <div className="sqrs">
            <ImageCard image={Dad33} mText={imageText.aboutGallery6}/>
            <ImageCard image={Dad32} mText={imageText.aboutGallery7}/>
            <ImageCard image={Dad31} mText={imageText.aboutGallery8}/>
            <ImageCard image={Dad29} mText={imageText.aboutGallery9}/>
            <ImageCard image={Dad40} mText={imageText.aboutGallery10}/>
        </div>
      </PageWrapper>
    );
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
    .sqrs {
    display: flex;
    flex-flow: row wrap;
    justify-items: center;
    justify-content: center;
    align-items: center;
  }
    .marginTop{
        margin-bottom:40px;
    }
    .marginBottom{
        margin-bottom:var(--marginBottom);
    }
`;