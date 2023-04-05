import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import { CloseFullscreen } from "@mui/icons-material";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "./App.css";

const Container = styled(Box)`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  flex-direction: column;
  padding: 0px 8px 8px;
`;

const Header = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
`;

const Head = styled(Box)`
  display: flex;
  background: #060606;
  color: #aaaebc;
  justify-content: space-between;
  font-weight: 700;
`;

const Editor = ({ title, icon, language, color, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <Container style={isOpen ? null : { flexGrow: 0 }}>
      <Head>
        <Header>
          <Box
            component={"span"}
            style={{
              backgroundColor: color,
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 2,
              color: "#000",
            }}
          >
            {icon}
          </Box>
          {title}
        </Header>
        <CloseFullscreen
          fontSize="small"
          style={{ alignSelf: "center" }}
          onClick={() => {
            setIsOpen((prevState) => !prevState);
          }}
        />
      </Head>
      <ControlledEditor
        className="controlled-editor"
        value={value}
        onBeforeChange={handleChange}
        options={{
          theme: "material",
          lineNumbers: true,
          lineWrapping: true,
          mode: language,
          lint: true,
        }}
      />
    </Container>
  );
};

export default Editor;
