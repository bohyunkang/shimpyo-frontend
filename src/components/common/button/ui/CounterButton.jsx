import styled from 'styled-components';

const CounterButton = styled.button`
width: ${((props) => (props.size === 'small' ? '18px' : '36px'))};
height: ${((props) => (props.size === 'small' ? '18px' : '36px'))};

background-color: ${((props) => (props.disabled ? '#F0F0F0' : props.theme.textColors.primary))};
border-radius: ${((props) => (props.size === 'small' ? '4px' : '8px'))};

img {
  width: ${((props) => (props.size === 'small' ? '7px' : '15px'))};
  height: 100%;
  vertical-align: middle;
}
`;

export default CounterButton;
