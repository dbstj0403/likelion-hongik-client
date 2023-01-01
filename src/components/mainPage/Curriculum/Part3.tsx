import React from "react";
import styled from "styled-components";

const Part3 = () => {
  return (
    <Box>
      <PartName>백엔드 타임라인</PartName>
      <div></div>
    </Box>
  );
};

const Box = styled.div`
  height: 330px;
  width: 80vw;
  margin-top: 50px;
`;

const PartName = styled.h2`
  color: white;
  font-size: 28px;
`;

export default Part3;
