import axios from 'axios';

import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class ApiService {
  constructor() {
    this.instance = axios.create({
      baseURL: baseUrl,
    });
  }

  async fetchPrograms() {
    const { data } = await this.instance.get('/programs');

    const { programs } = data;

    return { programs };
  }

  async fetchProgram(id) {
    const { data } = await this.instance.get(`/programs/${id}`);

    return data;
  }
}

export const apiService = new ApiService();
