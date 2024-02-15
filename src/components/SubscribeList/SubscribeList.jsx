import styled from "styled-components"
import imgWooman from '../img/assets/womenSubscribe.png'
import imgMan from '../img/assets/menSubscibe.svg'
import {useState} from 'react';


    const {Main,MainP,MainInp,TextRed,MainButton,ImgWooman,ImgMan}={
        Main:styled.div`
            width: 500px;
            height: 300px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            background: blue;
            font-size:18px;
            border-radius:20px;
            border: 2px solid black;
            margin-right:-100px;
            margin-left:-100px;
        `,
        MainP:styled.div`
            color: #000072;
        `,
        MainInp:styled.input`
        width: 300px;
        height: 50px;
        `,
        TextRed:styled.div`
            color: #be0000;
        `,
        MainButton:styled.button`
        width: 200px;
        height: 30px;
        margin: auto;
        `,
        ImgWooman:styled.img`
        margin-left:-10px;
        z-index: 5;
        margin-bottom:-40px;
        &:hover {
            pointer-events: none;
            }
        `,
        ImgMan:styled.img`
        margin-left:-10px;
        z-index: 5;
        margin-bottom:-40px;
        &:hover {
            pointer-events: none;
            }
        `
    }
export const  SubscribeList = ()=>{

    const [email, setEmail] = useState();
    const [error, setError] = useState(null);

    function CheckValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChange = event => {
        if (!CheckValidEmail(event.target.value)) {
          setError(true);
        } else {
          setError(false);
        }
    }


    return(
        <>
        <ImgWooman src={imgWooman}></ImgWooman>
        <Main>
        <MainP>SPECIAL OFFER</MainP>
        <h2>SUBSCRIBE AND </h2>
        <TextRed><h2>GET 10% OFF</h2></TextRed>
        <MainInp id="email" name="email" value={email} onChange={handleChange}/>
        <MainButton disabled={error}>Subscribe</MainButton>
        </Main>
        <ImgMan src={imgMan}></ImgMan>
        </>
    )
}