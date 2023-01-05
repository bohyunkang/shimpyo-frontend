import ProgramStore from './ProgramStore';

const context = describe;

describe('ProgramStore', () => {
  context('fetchPrograms', () => {
    it('프로그램 목록 조회하기', async () => {
      const programStore = new ProgramStore();

      await programStore.fetchPrograms();

      const program = programStore.programs[0];

      expect(program.location).toBe('백련사');
      expect(program.title).toBe('따뜻한 위로의 차담, 만덕산 옛길 산책');
      expect(program.category).toBe('TEMPLE');
    });
  });
});
