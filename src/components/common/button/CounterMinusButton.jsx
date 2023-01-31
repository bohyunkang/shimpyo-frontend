import { MinusGray, MinusWhite } from '../../../assets/icons/reservation';
import CounterButton from './ui/CounterButton';

export default function CounterMinusButton({ disabled, size = 'large' }) {
  const setIcon = disabled ? MinusGray : MinusWhite;

  return (
    <CounterButton type="button" size={size} disabled={disabled}>
      <img src={setIcon} alt="수량 마이너스 버튼" />
    </CounterButton>
  );
}
