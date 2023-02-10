import styled from 'styled-components';

import { Check } from '../../../assets/icons/input';

const Label = styled.label`
  display: flex;
  align-items: flex-end;
  user-select: none;
`;

const Input = styled.input`
  appearance: none;
  
  width: 18px;
  height: 18px;
  
  margin: 0;

  border: 2px solid ${({ theme }) => theme.textColors.content};
  border-radius: 4px;

  &:checked {
    border-color: transparent;
    background: url(${Check}) no-repeat 50% 50%;
    background-size: 100% 100%;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Text = styled.p`
  margin-left: 8px;

  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.textColors.content};
`;

export default function CheckBox({ name, text }) {
  return (
    <Label htmlFor={name}>
      <Input
        type="checkbox"
        id={name}
      />
      <Text>{text}</Text>
    </Label>
  );
}
