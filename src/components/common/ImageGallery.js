import react from "react";
import styled from "styled-components";
import Dad3 from "../../images/Dad3.jpg";
import Dad4 from "../../images/Dad4.jpg"

export default function ImageGallery(){
    return(
        <PageWrapper>
        <div className="sqrs">
            <img className="sqr" src={Dad3}/>
            <img className="sqr" src={Dad4}/>
        </div>
        </PageWrapper>
    )
}



const PageWrapper = styled.div`
.sqr {
    --size: 200px;
  
    height: var(--size);
    width: var(--size);
    border-radius: calc(var(--size) * 0.15);
    background: {
      image: var(--img);
      size: cover;
      repeat: no-repeat;
    }
    position: relative;
    box-shadow: 2.5px 2.5px 2.5px var(--darkGrey);
  
    &::after {
      content: "";
      position: absolute;
      width: calc(var(--size) * 0.8);
      height: 100%;
      top: calc(var(--size) * 0.05);
      left: 50%;
      transform: translateX(-50%);
      background: {
        image: var(--img);
        size: cover;
        repeat: no-repeat;
      }
      z-index: -1;
      filter: blur(20px) opacity(70%);
    }
  }  
  .sqr:hover{
    box-shadow: 5px 5px 5px var(--darkGrey);
  }
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