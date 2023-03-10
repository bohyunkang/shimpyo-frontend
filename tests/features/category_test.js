Feature('카테고리(전체 프로그램 목록) 페이지');

Before(({ I }) => {
  I.setupProgram();
  I.amOnPage('/programs');
});

Scenario('전체 프로그램 리스트를 볼 수 있다', ({ I }) => {
  // Then
  I.see('여기서 한 눈에');
  I.see('확인하세요');
  I.see('카테고리');
  I.see('더보기');
  I.see('전체 프로그램');
});

// TODO: 정렬 기능 개발 후에 E2E 테스트 통과 여부 확인하기
// Scenario('템플스테이 카테고리에 해당하는 프로그램을 볼 수 있다', ({ I }) => {
//   // When
//   I.click('템플스테이');

//   // Then
//   I.see('템플스테이');
// });

// Scenario('팜스테이 카테고리에 해당하는 프로그램을 볼 수 있다', ({ I }) => {
//   // When
//   I.click('팜스테이');

//   // Then
//   I.see('팜스테이');
// });

// Scenario('멍스테이 카테고리에 해당하는 프로그램을 볼 수 있다', ({ I }) => {
//   // When
//   I.click('멍스테이');

//   // Then
//   I.see('멍스테이');
// });

// Scenario('체험스테이 카테고리에 해당하는 프로그램을 볼 수 있다', ({ I }) => {
//   // When
//   I.click('체험스테이');

//   // Then
//   I.see('체험스테이');
// });

// Scenario('원데이클래스 카테고리에 해당하는 프로그램을 볼 수 있다', ({ I }) => {
//   // When
//   I.click('원데이클래스');

//   // Then
//   I.see('원데이클래스');
// });

// Scenario('프로그램을 인기순으로 정렬할 수 있다', ({ I }) => {
//   // When
//   I.click('인기 프로그램');

//   // Then
//   I.see('인기 프로그램');
// });

// Scenario('프로그램을 신규순으로 정렬할 수 있다', ({ I }) => {
//   // When
//   I.click('신규 프로그램');

//   // Then
//   I.see('신규 프로그램');
// });

// TODO: 검색 기능 개발 후에 E2E 테스트 통과 여부 확인하기
// Scenario('프로그램을 키워드로 검색할 수 있다', ({ I }) => {
//   // When
//   I.click('어떤 힐링을 해볼까요?');
//   I.fillField('검색 키워드');

//   // Then
//   I.see('검색 결과');
// });

// TODO: 프로그램이 존재하지 않는 경우 화면 제작 후 테스트 통과 여부 확인하기
// Scenario('프로그램이 존재하지 않는 경우', ({ I }) => {
//   // When
//   I.resetDatabase();
//   I.amOnPage('/category');

//   // Then
//   I.see('프로그램이 존재하지 않습니다.');
// });
