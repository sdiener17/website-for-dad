import react from "react";
import styled from "styled-components";
import ImageCard from "./ImageCard";
import Dad3 from "../../images/Dad3.jpg";
import Dad4 from "../../images/Dad4.jpg";
import Dad8 from "../../images/Dad8.jpg";
import Dad12 from "../../images/Dad12.jpg";
import Dad9 from "../../images/Dad9.jpg";


export default function ImageGallery(){
    return(
        <PageWrapper>
        <div className="sqrs">
            <ImageCard image={Dad3}/>
            <ImageCard image={Dad4}/>
            <ImageCard image={Dad8}/>
            <ImageCard image={Dad12}/>
            <ImageCard image={Dad9}/>
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