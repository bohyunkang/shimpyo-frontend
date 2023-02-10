import Store from './Store';

export default class ReservationStore extends Store {
  constructor() {
    super();

    // TODO: 스타일링 위해서 일시적으로 4번으로 해놓음. 0으로 바껴야 함
    this.currentProcess = 3;

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
