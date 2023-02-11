import ReservationStore from './ReservationStore';

const context = describe;

describe('ReservationStore', () => {
  let reservationStore;

  beforeEach(() => {
    reservationStore = new ReservationStore();
  });

  describe('countUp', () => {
    context('성인을 인자값으로 넘겨주는 경우', () => {
      it('성인 수량 증가시키기', () => {
        const initialCount = reservationStore.reservationItem.adult;

        reservationStore.countUp({ target: 'adult' });

        const currentCount = reservationStore.reservationItem.adult;

        expect(currentCount - initialCount).toBe(1);
      });

      context('아동을 인자값으로 넘겨주는 경우', () => {
        it('아동 수량 증가시키기', () => {
          const initialCount = reservationStore.reservationItem.child;

          reservationStore.countUp({ target: 'child' });

          const currentCount = reservationStore.reservationItem.child;

          expect(currentCount - initialCount).toBe(1);
        });
      });
    });
  });

  describe('countDown', () => {
    context('성인을 인자값으로 넘겨주는 경우', () => {
      it('성인 수량 감소시키기', () => {
        reservationStore.countUp({ target: 'adult' });

        const initialCount = reservationStore.reservationItem.adult;

        reservationStore.countDown({ target: 'adult' });

        const currentCount = reservationStore.reservationItem.adult;

        expect(initialCount - currentCount).toBe(1);
      });

      context('아동을 인자값으로 넘겨주는 경우', () => {
        it('아동 수량 감소시키기', () => {
          reservationStore.countUp({ target: 'child' });

          const initialCount = reservationStore.reservationItem.child;

          reservationStore.countDown({ target: 'child' });

          const currentCount = reservationStore.reservationItem.child;

          expect(initialCount - currentCount).toBe(1);
        });
      });

      context('count가 0이 되는 경우', () => {
        it('값이 더 이상 감소하지 않아야 한다', () => {
          reservationStore.countDown({ target: 'child' });

          const currentCount = reservationStore.reservationItem.child;

          expect(currentCount).toBe(0);
        });
      });
    });
  });
});
