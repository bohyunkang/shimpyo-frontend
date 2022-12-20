Feature('Home page');

Scenario('Visit the home page', ({ I }) => {
  // When
  I.amOnPage('/');

  // then
  I.see('Hello, world!');
});
