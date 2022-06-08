import React, {useEffect} from "react";
import styled from "styled-components";


export default function HomePage(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <PageWrapper>
            <div>Sarah's Spotlight</div>
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