import React, {useState} from "react";
import styled from "styled-components";
import CommonModal from "../common/CommonModal";



export default function ImageCard({image, mText}){
    const [showModal, setShowModal] = useState(false);
    const handleClickPic = (e) => {
        setShowModal(true);
    }
    return(
        <PageWrapper>
            <img className="sqr" src={image} onClick={handleClickPic}/>
            <CommonModal showModal={showModal} setShowModal={setShowModal} text={mText}/>
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
  
  .sqr {
    margin: 10px;
  }
`;