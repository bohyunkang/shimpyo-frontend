Feature('프로그램 상세 페이지');

Before(({ I }) => {
  I.setupProgram();
  I.amOnPage('/programs');
});

Scenario('프로그램 상세 내용을 볼 수 있다', ({ I }) => {
  // When
  I.see('전체 프로그램');
  I.see('힐링이 필요한');
  I.see('님을 위해서');
  I.click('70,000');

  // Then
  I.see('[백련사] 따뜻한 위로의 차담, 만덕산 옛길 산책');
});

// TODO: 날짜 설정 기능 개발 후에 E2E 테스트 통과 여부 확인하기
// Scenario('체크인 체크아웃 날짜를 설정할 수 있다.', ({ I }) => {
//   // When
//   I.click('월');

//   // Then
//   I.see('템플스테이');
// });

Scenario('프로그램 소개 섹션 [자세히 보기] 버튼 클릭 시 전문을 볼 수 있다', ({ I }) => {
  // Given
  I.click('70,000');
  I.see('프로그램 소개');
  I.see('템플스테이는 1,700년 한국 불교의 역사와 문화가 살아 숨쉬는 맑고 고요한 산사에서, 수행자의 일상과 더불어 우리 민족이 피워낸 지혜를 경험하는 전통 문화 체험 프로그');

  // When
  I.click('자세히 보기');

  // Then
  I.see('템플스테이는 1,700년 한국 불교의 역사와 문화가 살아 숨쉬는 맑고 고요한 산사에서, 수행자의 일상과 더불어 우리 민족이 피워낸 지혜를 경험하는 전통 문화 체험 프로그램입니다.');
});

Scenario('스테이 소개 섹션 [더보기] 버튼 클릭시 전문을 볼 수 있다', ({ I }) => {
  // Given
  I.click('70,000');
  I.see('스테이 소개');
  I.see('전남 강진에 있는 백련사는 차와 동백이 아름다운 사찰로 유명합니다. 고려 말 민간신앙 결사체인 백련결사를 맺었던 이곳은 조선 말 다산 정약용 선생이 유배 왔을 때 아암 혜장선사와 종교와 나이를 뛰어넘은 교유의 공간으로 잘 알려진 곳이기도 합니다.');

  // When
  I.click('더보기');

  // Then
  I.see('만덕사로 불렸던 백련사가 있는 산에는 고려시대 때부터 자생해온 야생차 밭이 있어서 다산(茶山)이라고 불리기도 합니다. 때문에 정약용이 이곳으로 유배 와서 지냈다는 의미로 다산이라는 호를 지어 사용했습니다.');
});

// TODO: 주소복사 기능 구현 후에 E2E 테스트 통과 여부 확인하기
// Scenario('찾아오시는 길 섹션 [주소복사] 버튼 클릭 시 주소 복사되었다는 알림 메시지를 볼 수 있다', ({ I }) => {
//   // Given
//   I.see('찾아오시는 길');
//   I.see('전라남도 강진군 도암면 백련사길 145');

//   // When
//   I.click('주소복사');

//   // Then
//   I.see('주소가 클립보드로 복사되었습니다!');
// });

// TODO: 지도 서비스 연결 후에 E2E 테스트 통과 여부 확인하기
// Scenario('찾아오시는 길 섹션 [대중교통 길 찾기] 버튼 클릭 시 지도 화면으로 이동하여 길을 찾는다', ({ I }) => {
//   // Given
//   I.see('찾아오시는 길');

//   // When
//   I.click('대중교통 길 찾기');

//   // Then
//   I.see('지도 화면');
// });

// TODO: 예약 페이지 작성 후에 E2E 테스트 통과 여부 확인하기
// Scenario('[예약하기] 버튼 클릭 시 예약화면으로 이동한다', ({ I }) => {
//   // When
//   I.click('예약하기');

//   // Then
//   I.see('예약옵션');
// });
