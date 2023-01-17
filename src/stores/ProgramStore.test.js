import ProgramStore from './ProgramStore';

const context = describe;

describe('ProgramStore', () => {
  let programStore;

  beforeEach(() => {
    programStore = new ProgramStore();
  });

  context('fetchPrograms', () => {
    it('프로그램 목록 조회하기', async () => {
      await programStore.fetchPrograms();
      const { programs } = programStore;

      expect(programs).toHaveLength(1);
    });
  });
  context('fetchProgram', () => {
    it('프로그램 목록 조회하기', async () => {
      await programStore.fetchProgram({ id: 1 });
      const { program } = programStore;

      expect(program.place.name).toBe('백련사');
      expect(program.title).toBe('따뜻한 위로의 차담, 만덕산 옛길 산책');
      expect(program.category).toBe('TEMPLE');
    });
  });
});
