import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import { AutoOnClickOutside } from './AutoClickOutside';
import { MenuState } from './MenuState';
import { MButton } from './MenuButton';
import { SideMenu } from './MenuSide';
import MediaQuery from 'react-responsive'
import { MenuDefoultAdaptive } from './MenuDefAdaptive';
import ImgLogo from '../img/Logo/Logo.png'
import ImgShoppingCartIcon from '../img/assets/shoppingCartIcon.svg'

const {Navbar,Wrapp,ImgIcon} = {Navbar:styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  box-sizing: border-box;
  outline: currentcolor none medium;
  max-width: 100%;
  margin: 0px;
  align-items: center;
  background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  color: rgb(248, 248, 248);
  min-width: 0px;
  min-height: 0px;
  flex-direction: row;
  justify-content: flex-start;
  padding: 6px 60px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
  z-index: 500;
`,
Wrapp:styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`,
ImgIcon:styled.img`
    width: 50px;
    background: white;
    border-radius: 15px;
`
}

export const Menu = () => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuState);
  AutoOnClickOutside(node, () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });



  return (
    <header ref={node}>
      <Navbar>
        <MediaQuery  maxWidth={840}>
            <Wrapp>
            <ImgIcon src={ImgLogo} alt="" />
            <ImgIcon src={ImgShoppingCartIcon} alt="" />
            <MButton/>
            </Wrapp>
        </MediaQuery>
        <MediaQuery minWidth={840}>
            <Wrapp>
                <MenuDefoultAdaptive/>
            </Wrapp>
        </MediaQuery>
      </Navbar>
      <SideMenu />
    </header>
  );
};