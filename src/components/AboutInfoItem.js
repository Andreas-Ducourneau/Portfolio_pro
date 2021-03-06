import React from 'react';
import styled from 'styled-components';

const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  /* gap: 5rem; */
  margin-top: 4rem;
  .title {
    font-size: 2.4rem;
    max-width: 280px;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 30rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
    max-width: 1000px;
    margin: 0 auto;
    font-size: 1.8rem;
    line-height: 1.3em;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
    }
  }
`;

export default function AboutInfoItem({
  title = 'Title',
  items = ['HTML', 'CSS'],
}) {
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}