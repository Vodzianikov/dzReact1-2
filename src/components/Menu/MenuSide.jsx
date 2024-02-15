import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { MenuState } from './MenuState';


const {Menu,MenuLink} = {
Menu:styled.nav`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 293;
  display: block;
  width: 400px;
  max-width: 100%;
  margin-top: 0px;
  padding-top: 100px;
  padding-right: 0px;
  align-items: stretch;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  ${props =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`,
MenuLink:styled.a`
  position: relative;
  display: block;
  text-align: left;
  max-width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 16%;
  background-position: 88% 50%;
  background-size: 36px;
  background-repeat: no-repeat;
  transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  text-decoration: none;
  color: #fff;
  font-size: 32px;
  line-height: 120%;
  font-weight: 500;
  :hover {
    background-position: 90% 50%;
  }
`}

export const SideMenu = ({ children }) => {
  const { isMenuOpen } = useContext(MenuState);

  return <Menu open={isMenuOpen}>{children}</Menu>;
};

SideMenu.propTypes = {
  children: PropTypes.node,
};

SideMenu.defaultProps = {
  children: (
    <>
      <MenuLink href="/">ELECTRONICS</MenuLink>
      <MenuLink href="/articles">JEWELERY</MenuLink>
      <MenuLink href="/about">MEN'S CLOTHING</MenuLink>
      <MenuLink href="/contact">WOMEWN'S CLOTHING</MenuLink>
    </>
  ),
};