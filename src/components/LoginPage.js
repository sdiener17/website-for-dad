import React, {useEffect, useState} from "react";
import styled from "styled-components";


export default function HomePage({setIsLoggedIn}){
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const onClick = (e) =>{
        e.preventDefault();
        if(username==="sarahisthebest" && password==="Sav3Th3Flaming0s12@"){
            setIsLoggedIn(true);
        }
    }
    return (
        <PageWrapper>
            <form className="form-wrapper">
                <div>Please log in.</div>
                <input type="text" name="username" placeholder="Username" autoFocus={true} onChange={(e) => setUserName(e.target.value)}/>
                <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={onClick}>Log in!</button>
            </form>
            
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
    .form-wrapper{
        display:flex;
        flex-direction:column;
        border: 5px solid black;
        padding:5px;
    }
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