/* eslint-disable import/no-extraneous-dependencies */

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import config from './config';

const baseUrl = config.apiBaseUrl;

const server = setupServer(
  rest.post(`${baseUrl}/session`, async (req, res, ctx) => {
    const { email, password } = await req.json();

    if (email === 'healing@shimpyo.com' && password === 'Healing1234!') {
      return res(
        ctx.json({
          accessToken: 'ACCESS.TOKEN',
          nickname: '강힐링',
        }),
      );
    }

    return res(ctx.status(400));
  }),

  rest.post(`${baseUrl}/users`, async (req, res, ctx) => {
    const {
      name, email, password, confirmPassword, nickname,
    } = await req.json();

    if (name === '강힐링'
    && email === 'healing@shimpyo.com'
    && password === 'Healing1234!'
    && confirmPassword === 'Healing1234!'
    && nickname === '힐링이필요해') {
      return res(
        ctx.json({
          id: 1,
          email: 'healing@shimpyo.com',
          name: '강힐링',
          nickname: '힐링이필요해',
        }),
      );
    }

    return res(
      ctx.status(400),
    );
  }),

  rest.get(`${baseUrl}/user/me`, async (req, res, ctx) => res(
    ctx.json({
      email: 'healing@shimpyo.com',
      name: '강힐링',
      nickname: '힐링이필요해',
    }),
  )),

  rest.get(`${baseUrl}/users/count`, async (req, res, ctx) => {
    const email = req.url.searchParams.get('email');

    if (email === 'healing@email.com') {
      return res(
        ctx.json({
          count: 1,
        }),
      );
    }

    return res(
      ctx.json({
        count: 0,
      }),
    );
  }),

  rest.get(`${baseUrl}/programs`, async (req, res, ctx) => res(
    ctx.json({
      programs: [
        {
          id: 1,
          title: '따뜻한 위로의 차담, 만덕산 옛길 산책',
          price: 70000,
          imageUrl: 'https://user-images.githubusercontent.com/65386533/212583629-67fc3343-1ca5-410b-9371-725ac4736615.png',
          category: 'TEMPLE',
          place: {
            id: 1,
            name: '백련사',
            address: '전라남도 강진군 도암면 백련사길 145',
            phoneNumber: '0558624425',
            pickUp: false,
            description: '전남 강진에 있는 백련사는 차와 동백이 아름다운 사찰로 유명합니다. 고려 말 민간신앙 결사체인 백련결사를 맺었던 이곳은 조선 말 다산 정약용 선생이 유배 왔을 때 아암 혜장선사와 종교와 나이를 뛰어넘은 교유의 공간으로 잘 알려진 곳이기도 합니다.',
            checkInStart: '13',
            checkInEnd: '24',
            checkOut: '12',
          },
          offers: ['주차가능', '카페테리아', '다도', '일출', '사찰음식', '연등', '수련복', '명상'],
          rules: ['여름에 소매 없는 옷과 무릎 위 짧은 바지는 삼가주세요.', '수건, 칫솔 등 개인 세면도구는 각자 준비하셔야 합니다.', '운동화 또는 등산화를 꼭 준비하세요.', '미성년자는 보호자나 인솔 교사의 동반 시에만 참가가 가능합니다.'],
          createdAt: '2023-01-15T12:53:41.399921',
          updatedAt: '2023-01-15T12:53:41.399921',
        },
        {
          id: 2,
          title: '깨어있는 휴식, 여러가지 명상 체험',
          price: 50000,
          imageUrl: 'https://user-images.githubusercontent.com/65386533/212583629-67fc3343-1ca5-410b-9371-725ac4736615.png',
          category: 'TEMPLE',
          place: {
            id: 2,
            name: '구인사',
            address: '충청북도 단양군 영춘면 구인사길 73',
            phoneNumber: '0558624425',
            pickUp: false,
            description: '충북 단양에 있는 구인사는 차와 동백이 아름다운 사찰로 유명합니다. 고려 말 민간신앙 결사체인 백련결사를 맺었던 이곳은 조선 말 다산 정약용 선생이 유배 왔을 때 아암 혜장선사와 종교와 나이를 뛰어넘은 교유의 공간으로 잘 알려진 곳이기도 합니다.',
            checkInStart: '13',
            checkInEnd: '24',
            checkOut: '12',
          },
          offers: ['주차가능', '카페테리아', '다도', '일출', '사찰음식', '연등', '수련복', '명상'],
          rules: ['여름에 소매 없는 옷과 무릎 위 짧은 바지는 삼가주세요.', '수건, 칫솔 등 개인 세면도구는 각자 준비하셔야 합니다.', '운동화 또는 등산화를 꼭 준비하세요.', '미성년자는 보호자나 인솔 교사의 동반 시에만 참가가 가능합니다.'],
          createdAt: '2023-01-15T12:53:41.399921',
          updatedAt: '2023-01-15T12:53:41.399921',
        },
      ],
    }),
  )),

  rest.get(`${baseUrl}/programs/1`, async (req, res, ctx) => res(
    ctx.json({
      id: 1,
      title: '따뜻한 위로의 차담, 만덕산 옛길 산책',
      price: 70000,
      imageUrl: 'https://user-images.githubusercontent.com/65386533/212583629-67fc3343-1ca5-410b-9371-725ac4736615.png',
      category: 'TEMPLE',
      place: {
        id: 1,
        name: '백련사',
        address: '전라남도 강진군 도암면 백련사길 145',
        phoneNumber: '0558624425',
        pickUp: false,
        description: '전남 강진에 있는 백련사는 차와 동백이 아름다운 사찰로 유명합니다. 고려 말 민간신앙 결사체인 백련결사를 맺었던 이곳은 조선 말 다산 정약용 선생이 유배 왔을 때 아암 혜장선사와 종교와 나이를 뛰어넘은 교유의 공간으로 잘 알려진 곳이기도 합니다.',
        checkInStart: '13',
        checkInEnd: '24',
        checkOut: '12',
      },
      offers: ['주차가능', '카페테리아', '다도', '일출', '사찰음식', '연등', '수련복', '명상'],
      rules: ['여름에 소매 없는 옷과 무릎 위 짧은 바지는 삼가주세요.', '수건, 칫솔 등 개인 세면도구는 각자 준비하셔야 합니다.', '운동화 또는 등산화를 꼭 준비하세요.', '미성년자는 보호자나 인솔 교사의 동반 시에만 참가가 가능합니다.'],
      createdAt: '2023-01-15T12:53:41.399921',
      updatedAt: '2023-01-15T12:53:41.399921',
    }),
  )),
);

export default server;
