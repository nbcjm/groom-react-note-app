import styled from "styled-components";

export const Container = styled.div`
  padding: 25px 0 25px 25px;
  @media screen and (max-width: 650px) {
    padding: 20px;
  }
`;

export const NotesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`;

export const EmptyMsgBox = styled.div`
  text-align: center;
  font-size: clamp(1.2rem, 2vw, 1.3rem);
  font-weight: 500;
`;

export const ButtonFill = styled.button`
  padding: 6px 20px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
  transition: 250ms background-color ease-in-out;
  span {
    font-weight: 500;
    font-size: clamp(15px, 3.5vw, 1.2rem);
  }
  background-color: var(--primary-color);
  border: 1px solid var(--primary-color);

  &:hover {
    background-color: rgb(253, 239, 195, 0.5);
  }

  @media screen and (max-width: 600px) {
    padding: 6px 12px;
  }
`;

export const ButtonOutline = styled.button`
  padding: 6px 20px;
  border-radius: 5px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.05);
  box-shadow: 0 2px 1px 1px rgba(0, 0, 0, 0.2);
  transition: 250ms background-color ease-in-out;
  white-space: nowrap;
 
  span {
    font-weight: 500;
    font-size: clamp(15px, 3.5vw, 1.2rem);
    margin-left: 5px;
  }
  border: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 600px) {
    padding: 6px 12px;
  }
`;

export const NotesIconBox = styled.span`
  padding: 0 6px;
  cursor: pointer;

  svg {
    transition: 250ms color ease-in-out;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
  }

  &:hover {
    svg {
      color: var(--primary-color);
    }
  }
`;
