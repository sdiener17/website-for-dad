import react from "react";
import styled from "styled-components";
import ImageCard from "./ImageCard";
import Dad26 from "../../images/Dad26.jpg";
import Dad4 from "../../images/Dad4.jpg";
import Dad8 from "../../images/Dad8.jpg";
import Dad12 from "../../images/Dad12.jpg";
import Dad9 from "../../images/Dad9.jpg";
import { imageText } from "../../data/imageText";


export default function ImageGallery(){
    return(
        <PageWrapper>
        <div className="sqrs">
            <ImageCard image={Dad26} mText={imageText.homeGallery1}/>
            <ImageCard image={Dad4} mText={imageText.homeGallery2}/>
            <ImageCard image={Dad8} mText={imageText.homeGallery3}/>
            <ImageCard image={Dad12} mText={imageText.homeGallery4}/>
            <ImageCard image={Dad9} mText={imageText.homeGallery5}/>
        </div>
        </PageWrapper>
    )
}



const PageWrapper = styled.div`
  .sqrs {
    display: flex;
    flex-flow: row wrap;
    justify-items: center;
    justify-content: center;
    align-items: center;
  }
  
  .sqr {
    margin: 10px;
  }
`;