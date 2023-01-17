import { apiService } from '../services/ApiService';
import Store from './Store';

export default class ProgramStore extends Store {
  constructor() {
    super();

    this.isProgramsLoading = false;
    this.isProgramLoading = false;

    this.programs = [];
    this.program = {};
  }

  async fetchPrograms() {
    this.startProgramsLoad();

    try {
      const { programs } = await apiService.fetchPrograms();

      this.completeProgramsLoad(programs);
    } catch (error) {
      this.failProgramsLoad();
    }
  }

  async fetchProgram({ id }) {
    this.startProgramLoad();

    try {
      const program = await apiService.fetchProgram(id);

      this.completeProgramLoad(program);
    } catch (error) {
      this.failProgramLoad();
    }
  }

  startProgramsLoad() {
    this.isProgramsLoading = true;
    this.programs = [];
    this.publish();
  }

  completeProgramsLoad(programs) {
    this.isProgramsLoading = false;
    this.programs = programs;
    this.publish();
  }

  failProgramsLoad() {
    this.isProgramsLoading = false;
    this.programs = [];
    this.publish();
  }

  startProgramLoad() {
    this.isProgramLoading = true;
    this.program = {};
    this.publish();
  }

  completeProgramLoad(program) {
    this.isProgramLoading = false;
    this.program = program;
    this.publish();
  }

  failProgramLoad() {
    this.isProgramLoading = false;
    this.program = {};
    this.publish();
  }
}

export const programStore = new ProgramStore();
