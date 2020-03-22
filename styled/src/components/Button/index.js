import React from "react";
import styled from "styled-components";

const List = styled.ul`
  background: ${props => props.theme.backgroundFound};
  color: ${props => props.theme.color};
  font-family: sans-serif;
  font-size: 18px;
  li {
    line-height: 36px;
  }
`;

const TodoList = () => (
  <List>
    <li>Fazer café</li>
    <li>Entrar na comunidade da Rocketseat</li>
    <li>Estudar ReactJS</li>
  </List>
);

export default TodoList;
