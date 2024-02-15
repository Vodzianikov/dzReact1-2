import styled from "styled-components"
const {UserStyle,StyleImg, StyleLi,StyleButton,StyleRating} = {
    UserStyle:styled.div`
        margin: 100px;
        display:flex;
        border: 3px solid black;
        border-radius:20px;
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 20%, rgba(255,0,0,0.26934523809523814) 78%);
        color:white;
        box-shadow: 4px 4px 6px rgba(83, 9, 9, 0.3);
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 50px;
        @media(max-width:480px){
            border: 0px solid black;
            background: none;
            box-shadow: none;
        }
    `,
    StyleImg:styled.img`
        width: 200px;
        height:300px;
        border: 5px solid black;
        border-radius:20px ;
        box-shadow: 4px 4px 6px rgba(8, 77, 180, 0.3);

    `,
    StyleLi:styled.li`
        text-decoration: none;
        border: 1px solid black;
        border-radius: 10px;
        background: rgba(5, 4, 20, 0.712);;
        @media(max-width:480px){
            background: none;
            border:none;
        }
    `,
    StyleButton:styled.button`
    
        width: 200px;
        border-radius:20px;
        border: 1px solid red;
        background: red;
        box-shadow: 3px 3px 5px rgb(114, 0, 0);
        display: flex;
        text-align: center;
        transition: all .5s ease;
        align-items: center;
        justify-content: center;
        &:hover {
            border: 1px solid #9c79fa;
                background: #4400ff;
                box-shadow: -3px -3px  #120044;
            }
    `,
    StyleRating:styled.div`
        margin: 10px;
        width: 100px;
        background: red;
        border: 1px solid black;
        border-radius:20px;
        transition: all .5s ease;
        &:hover {
                background: #4400ff;
            }
    `
}

export const User = ({category, description , image,price,title,rating}) =>{
    return (
        
        <UserStyle>
            <StyleRating>
                <p>rate: <h2>{rating.rate}$</h2> </p>
            </StyleRating>
            <div>
                <StyleImg src={image} alt="" />
            </div>
                <StyleLi>
                    <ul><h2>Categoty:</h2>{`${category}`}</ul>
                    <ul><h2>Description:</h2> {`${description}`}</ul>
                    <ul><h2>Title:</h2>{`${title}`}</ul>
                </StyleLi>
                <StyleButton>
                <h2>Price:{`${price}`}</h2>
                </StyleButton>
        </UserStyle>
    )
}