import { PlusGray, PlusWhite } from '../../../assets/icons/reservation';
import CounterButton from './ui/CounterButton';

export default function CounterPlusButton({ disabled, size = 'large', handler }) {
  const setIcon = disabled ? PlusGray : PlusWhite;

  return (
    <CounterButton
      type="button"
      size={size}
      disabled={disabled}
      onClick={handler}
    >
      <img src={setIcon} alt="수량 플러스 버튼" />
    </CounterButton>
  );
}
