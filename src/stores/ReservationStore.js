import Store from './Store';

export default class ReservationStore extends Store {
  constructor() {
    super();

    this.currentProcess = 0;

    this.programId = 0;
    this.participants = {
      adult: { count: 0 },
      child: { count: 0 },
    };
  }

  resetCurrentProcess() {
    this.currentProcess = 0;
  }

  goToNextProcess() {
    this.currentProcess += 1;

    this.publish();
  }

  goToPreviousProcess() {
    this.currentProcess -= 1;

    this.publish();
  }

  countUp({ target }) {
    this.participants[target] = {
      count: this.participants[target].count += 1,
    };

    this.publish();
  }

  countDown({ target }) {
    if (this.participants[target].count < 1) {
      return;
    }

    this.participants[target] = {
      count: this.participants[target].count -= 1,
    };

    this.publish();
  }
}

export const reservationStore = new ReservationStore();
