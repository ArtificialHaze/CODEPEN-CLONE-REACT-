import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";

const Container = styled(AppBar)`
  background: "#060606";
  height: 9vh;
  position: static;
  border-bottom: 1px solid #2f2f2f;
`;

const Header = () => {
  const logo = "[LOGO_URL_GOES_HERE]";

  return (
    <Container>
      <Toolbar>
        <img src={logo} alt="Logo" style={{ width: 40 }} />
      </Toolbar>
    </Container>
  );
};

export default Header;
