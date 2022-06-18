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
import Dad22 from "../../images/Dad22c.jpg";
import Dad3 from "../../images/Dad3.jpg";
import Dad41 from "../../images/Dad41.jpg";
import Dad44 from "../../images/Dad44.jpg";
import Dad15 from "../../images/Dad15.jpg";
import Dad19 from "../../images/Dad19.jpg";
import Dad20 from "../../images/Dad20.jpg";
import Dad21 from "../../images/Dad21.jpg";
import Dad23 from "../../images/Dad23.jpg";
import Dad28 from "../../images/Dad28.jpg";
import Dad30 from "../../images/Dad30.jpg";
import Dad34 from "../../images/Dad34.jpg";
import Dad35 from "../../images/Dad35.jpg";
import Dad37 from "../../images/Dad37.jpg";
import Dad38 from "../../images/Dad38.jpg";
import Dad39 from "../../images/Dad39.jpg";
import Dad42 from "../../images/Dad42.jpg";
import Dad45 from "../../images/Dad45.jpg";
import Dad47 from "../../images/Dad47.jpg";

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
        <p className="pic-description">
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
        <p className="pic-description">You always helped us in everything we did</p>
        <div className="sqrs">
          <ImageCard image={Dad15} mText={imageText.aboutGallery11}/>
          <ImageCard image={Dad19} mText={imageText.aboutGallery12}/>
          <ImageCard image={Dad20} mText={imageText.aboutGallery13}/>
          <ImageCard image={Dad21} mText={imageText.aboutGallery14}/>
          <ImageCard image={Dad23} mText={imageText.aboutGallery15}/>
        </div>
        <div className="sqrs">
          <ImageCard image={Dad28} mText={imageText.aboutGallery16}/>
          <ImageCard image={Dad30} mText={imageText.aboutGallery17}/>
          <ImageCard image={Dad34} mText={imageText.aboutGallery18}/>
          <ImageCard image={Dad35} mText={imageText.aboutGallery19}/>
          <ImageCard image={Dad37} mText={imageText.aboutGallery20}/>
        </div>
        <div className="sqrs">
          <ImageCard image={Dad38} mText={imageText.aboutGallery21}/>
          <ImageCard image={Dad42} mText={imageText.aboutGallery22}/>
          <ImageCard image={Dad39} mText={imageText.aboutGallery23}/>
          <ImageCard image={Dad45} mText={imageText.aboutGallery24}/>
          <ImageCard image={Dad47} mText={imageText.aboutGallery25}/>
        </div>
        <p className="pic-description">You're definitely not the meanest dad in the world! 😉</p>
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
  .pic-description{
    margin-top:60px;
  }
`;