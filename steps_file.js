/* global actor */

const backdoorBaseUrl = 'http://localhost:8000/backdoor';

module.exports = () => actor({
  resetDatabase() {
    this.amOnPage(`${backdoorBaseUrl}/reset-database`);
  },

  setupProgram() {
    this.amOnPage(`${backdoorBaseUrl}/setup-program`);
  },

  submit() {
    this.click('[type=submit]');
  },
});
