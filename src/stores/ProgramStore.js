import { apiService } from '../services/ApiService';
import Store from './Store';

export default class ProgramStore extends Store {
  constructor() {
    super();

    this.programs = [];
  }

  async fetchPrograms() {
    this.programs = [];
    this.publish();

    const { programs } = await apiService.fetchPrograms();

    this.programs = programs;
    this.publish();
  }
}

export const programStore = new ProgramStore();
