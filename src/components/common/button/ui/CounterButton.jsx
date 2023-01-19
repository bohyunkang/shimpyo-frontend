import styled from 'styled-components';

const CounterButton = styled.button`
  width: 36px;
  height: 36px;

  padding: 10px;

  background-color: ${((props) => (props.disabled ? '#F0F0F0' : props.theme.textColors.primary))};
  border-radius: 8px;

  img {
    vertical-align: middle;
  }
`;

export default CounterButton;
