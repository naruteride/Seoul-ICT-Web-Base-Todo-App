import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const TextInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
`;

export const SubmitInput = styled.input`
  padding: 10px 20px;
  background-color: #f90;
  color: #fff;
  border: none;
  border-radius: 50px; /* Make it round */
  cursor: pointer;
  animation: ${bounce} 1s infinite;

  &:hover {
    background-color: #e8801d;
  }
`;

export const UnorderdList = styled.ul`
  list-style: none;
  padding: 0;
  min-width: 250px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 10px 0;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TodoText = styled.span`
  cursor: pointer;
  flex-grow: 1;
  ${({ todoDone }) =>
    todoDone && `
      text-decoration: line-through;
      color: #aaa;
    `}
`;

export const TodoDelete = styled.button`
  padding: 5px 10px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: 1rem;
  &:hover {
    background-color: #c82333;
    animation: ${bounce} 1s infinite;
  }
`;
