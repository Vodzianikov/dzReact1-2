import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const MenuState = createContext({
  isMenuOpen: true,
  toggleMenu: () => {},
});

export const NavState = ({ children }) => {
  const [isMenuOpen, toggleMenu] = useState(false);

  function toggleMenuMode() {
    toggleMenu(!isMenuOpen);
  }

  return (
    <MenuState.Provider value={{ isMenuOpen, toggleMenuMode }}>
      {children}
    </MenuState.Provider>
  );
};

NavState.propTypes = {
  children: PropTypes.node.isRequired,
};
