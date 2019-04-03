import React from "react";
import styled from "styled-components";

const CodeImage = styled.img`
  height: ${props => props.height || "auto"};
  width: ${props => props.width || "auto"};
`;

const Code = ({ src, height, width }) => {
  return <CodeImage height={height} width={width} src={src} alt="Code Image" />;
};

export default Code;
