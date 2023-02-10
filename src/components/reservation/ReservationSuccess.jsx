import { Link } from 'react-router-dom';
import { CompletionICon } from '../../assets/icons/reservation';
import ScrollToTop from '../common/ScrollToTop';

export default function ReservationSuccess() {
  const id = 182689;

  return (
    <article>
      <ScrollToTop />
      <div>
        <div>
          <div>
            <h2>
              예약이
              {' '}
              <br />
              접수되었습니다.
            </h2>
            <img src={CompletionICon} alt="예약 완료 아이콘" />
          </div>
          <p>
            예약하신 프로그램의 예약번호는
            {' '}
            <strong>182689</strong>
            {' '}
            입니다.
          </p>
        </div>
        <div>
          <h3>[백련사] 따뜻한 위로의 차담, 만덕산 옛길 산책</h3>
          <div>
            <div>
              <p>체크인</p>
              <strong>1월 9일(월)</strong>
              <span>13:00</span>
            </div>
            <div>
              <span>1박</span>
            </div>
            <div>
              <p>체크아웃</p>
              <strong>1월 10일(화)</strong>
              <span>12:00</span>
            </div>
          </div>
          <dl>
            <dt>예약 구분</dt>
            <dd>확정 예약</dd>
            <dt>이용 기간</dt>
            <dd>2023.01.09(월) - 2023.01.10(화)</dd>
            <dt>인원</dt>
            <dd>성인 1명</dd>
            <dt>객실 타입</dt>
            <dd>선화당 1인실(기준 1인 / 최대 1인)</dd>
            <dt>예약자명</dt>
            <dd>강보현</dd>
          </dl>
          <dl>
            <dt>결제 금액</dt>
            <dd>170,954원</dd>
          </dl>
        </div>
      </div>
      <div>
        <Link to={`/reservations/${id}`}>
          예약내역 상세보기
        </Link>
      </div>
    </article>
  );
}
