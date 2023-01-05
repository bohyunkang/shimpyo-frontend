/* eslint-disable import/no-extraneous-dependencies */

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import config from './config';

const baseUrl = config.apiBaseUrl;

const server = setupServer(
  rest.get(`${baseUrl}/programs`, async (req, res, ctx) => res(
    ctx.json({
      programs: [
        {
          id: 1,
          location: '백련사',
          title: '따뜻한 위로의 차담, 만덕산 옛길 산책',
          price: 70000,
          address: '전라남도 강진군 도암면 백련사길 145',
          category: 'TEMPLE',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
          createdAt: '2022-02-26T16:37:48.244Z',
          updatedAt: '2022-02-26T16:37:48.244Z',
        },
        {
          id: 2,
          location: '구인사',
          title: '깨어있는 휴식, 여러가지 명상 체험',
          price: 100000,
          address: '충청북도 단양군 영춘면 구인사길 73',
          category: 'TEMPLE',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
          createdAt: '2022-02-26T16:37:48.244Z',
          updatedAt: '2022-02-26T16:37:48.244Z',
        },
      ],
    }),
  )),
);

export default server;
