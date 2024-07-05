import React from 'react';
import styled from 'styled-components';

const SubTitle = styled.div`
  width: 100%;
  background-color: #e1afaf;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 20px;
  box-sizing: border-box; /* Ensure padding is included in the element's total width and height */
`;

const SubTitleSection = ({ subtitles }) => {
  return (
    <>
      {subtitles.map((subtitle, index) => (
        <SubTitle id={`subtitle-${index}`} key={index}>
          <h3>{subtitle.title}</h3>
          <p>{subtitle.content}</p>
        </SubTitle>
      ))}
    </>
  );
};

export default SubTitleSection;
