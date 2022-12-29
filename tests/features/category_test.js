Feature('카테고리(전체 프로그램 목록) 페이지');

Before(({ I }) => {
  I.amOnPage('/');
  I.click('카테고리');
});

Scenario('전체 프로그램 리스트를 볼 수 있다', ({ I }) => {
  // Then
  I.see('여기서 한 눈에 확인하세요');
});

Scenario('템플스테이 카테고리에 해당하는 프로그램을 볼 수 있다', ({ I }) => {
  // When
  I.click('템플스테이');

  // Then
  I.see('템플스테이');
});

Scenario('팜스테이 카테고리에 해당하는 프로그램을 볼 수 있다', ({ I }) => {
  // When
  I.click('팜스테이');

  // Then
  I.see('팜스테이');
});

Scenario('멍스테이 카테고리에 해당하는 프로그램을 볼 수 있다', ({ I }) => {
  // When
  I.click('멍스테이');

  // Then
  I.see('멍스테이');
});

Scenario('체험스테이 카테고리에 해당하는 프로그램을 볼 수 있다', ({ I }) => {
  // When
  I.click('체험스테이');

  // Then
  I.see('체험스테이');
});

Scenario('원데이클래스 카테고리에 해당하는 프로그램을 볼 수 있다', ({ I }) => {
  // When
  I.click('원데이클래스');

  // Then
  I.see('원데이클래스');
});

Scenario('프로그램을 인기순으로 정렬할 수 있다', ({ I }) => {
  // When
  I.click('인기 프로그램');

  // Then
  I.see('인기 프로그램');
});

Scenario('프로그램을 신규순으로 정렬할 수 있다', ({ I }) => {
  // When
  I.click('신규 프로그램');

  // Then
  I.see('신규 프로그램');
});
