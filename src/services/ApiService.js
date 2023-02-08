import axios from 'axios';

import config from '../config';

const baseUrl = config.apiBaseUrl;

export default class ApiService {
  constructor() {
    this.accessToken = '';

    this.instance = axios.create({
      baseURL: baseUrl,
    });
  }

  setAccessToken(accessToken) {
    this.accessToken = accessToken;

    if (accessToken) {
      this.instance = axios.create({
        baseURL: baseUrl,
        headers: { Authorization: `Bearer ${this.accessToken}` },
      });
    }
  }

  async postSession({ email, password }) {
    const { data } = await this.instance.post('/session', {
      email, password,
    });

    return {
      accessToken: data.accessToken,
      nickname: data.nickname,
    };
  }

  async postUser({
    name, email, password, confirmPassword, nickname,
  }) {
    const { data } = await this.instance.post('/users', {
      name, email, password, confirmPassword, nickname,
    });

    return {
      id: data.id,
      email: data.email,
      name: data.name,
      nickname: data.nickname,
    };
  }

  async countUser(email) {
    const { data } = await this.instance.get(`/users/count?email=${email}`);

    return data.count;
  }

  async fetchUser() {
    const { data } = await this.instance.get('/users/me');

    return {
      email: data.email,
      name: data.name,
      nickname: data.nickname,
    };
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
