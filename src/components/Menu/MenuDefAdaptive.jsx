import styled from 'styled-components';
import ImgShoppingCartIcon from '../img/assets/shoppingCartIcon.svg'
import ImgLogo from '../img/Logo/Logo.png'
const {Wrapper,ImgIcon,MenuUl}={
    Wrapper:styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    `,
    ImgIcon:styled.img`
    width: 50px;
    background: white;
    border-radius: 15px;
    cursor: pointer;
    `,
    MenuUl:styled.ul`
        display: flex;
        justify-content: space-between;
        list-style-type:  none;
    `
}


export const MenuDefoultAdaptive = ( )=>{
    return(
        <Wrapper>
        <ImgIcon src={ImgLogo}/>
        <MenuUl>
            <ul>ELECTRONICS</ul>
            <ul>JEWELERY</ul>
            <ul>MEN'S CLOTHING</ul>
            <ul>WOMEWN'S CLOTHING</ul>
        </MenuUl>
        <ImgIcon src={ImgShoppingCartIcon}/>
        </Wrapper>
    )
}