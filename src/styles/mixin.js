import { css } from 'styled-components';

const flexBox = (
  direction = 'row',
  justify = 'center',
  align = 'center',
) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`;

const searchField = () => css`
  width: 100%;
  padding: 12px;
  border-radius: 12px;

  background-color: #F5F5F5;
`;

const b4 = () => css`
  font-size: 12px;
  font-weight: 400;
`;

const b4Bold = () => css`
  font-size: 12px;
  font-weight: 600;
`;

const mixin = {
  flexBox,
  searchField,
  b4,
  b4Bold,
};

export default mixin;
