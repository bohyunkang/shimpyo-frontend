import Store from './Store';

export default class ReservationStore extends Store {
  constructor() {
    super();

    this.currentProcess = 0;

    this.programId = 0;

    this.reservationItem = {
      programId: '',
      roomId: '',
      name: '',
      checkInDate: new Date(),
      checkOutDate: '',
      adult: 0,
      child: 0,
    };

    this.createReservationStatus = '';
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

  resetCount() {
    this.reservationItem = {
      ...this.reservationItem,
      adult: 0,
      child: 0,
    };

    this.publish();
  }

  countUp({ target }) {
    this.reservationItem = {
      ...this.reservationItem,
      [target]: this.reservationItem[target] += 1,
    };

    this.publish();
  }

  countDown({ target }) {
    if (this.reservationItem[target] < 1) {
      return;
    }

    this.reservationItem = {
      ...this.reservationItem,
      [target]: this.reservationItem[target] -= 1,
    };

    this.publish();
  }

  async create() {
    this.changeCreateReservationStatus('processing');

    try {
      const reservationDetails = {
        reservationItem: this.reservationItem,
        booker: {},
        payment: {},
        price: {},
      };

      // private Long programId;
      // private Long roomId;
      // private String name;
      // private String checkInDate;
      // private String checkOutDate;
      // private Long numberOfAdult;
      // private Long numberOfChild;

      this.changeCreateReservationStatus('successful');

      return '';
    } catch (e) {
      this.changeCreateReservationStatus('failed');

      return '';
    }
  }

  changeCreateReservationStatus(status) {
    this.createReservationStatus = status;
    this.publish();
  }
}

export const reservationStore = new ReservationStore();
