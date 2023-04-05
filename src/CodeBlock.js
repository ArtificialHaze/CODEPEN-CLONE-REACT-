import React, { useContext } from "react";
import Editor from "./Editor";
import { Box, styled } from "@mui/material";
import { DataContext } from "./DataProvider";

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
  height: 50vh;
`;

const CodeBlock = () => {
  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

  return (
    <Container>
      <Editor
        language={"xml"}
        title="HTML"
        icon="/"
        color="#ff3c41"
        value={html}
        onChange={setHtml}
      />
      <Editor
        language={"css"}
        title="CSS"
        icon="*"
        color="#0ebeff"
        value={css}
        onChange={setCss}
      />
      <Editor
        language={"javascript"}
        title="JS"
        icon="()"
        color="#fcd000"
        value={js}
        onChange={setJs}
      />
    </Container>
  );
};

export default CodeBlock;
