import { Temple } from '../assets/images/category';

// TODO: 템플스테이 제외한 나머지 스테이들 introduction 수정해야 함
const CATEGORY_TYPE = [
  {
    id: 1,
    name: '템플스테이',
    type: 'TEMPLE',
    path: '/programs?category=temple',
    introduction: {
      title: '참된 나를 찾는 여행,\n템플스테이',
      content: '템플스테이는 1,700년 한국 불교의 역사와 문화가 살아 숨쉬는 맑고 고요한 산사에서, 수행자의 일상과 더불어 우리 민족이 피워낸 지혜를 경험하는 전통 문화 체험 프로그램입니다.',
      thumbnail: Temple,
    },
  },
  {
    id: 2,
    name: '팜스테이',
    type: 'FARM',
    path: '/programs?category=farm',
    introduction: {
      title: '참된 나를 찾는 여행,\n팜스테이',
      content: '팜스테이는 1,700년 한국 불교의 역사와 문화가 살아 숨쉬는 맑고 고요한 산사에서, 수행자의 일상과 더불어 우리 민족이 피워낸 지혜를 경험하는 전통 문화 체험 프로그램입니다.',
      thumbnail: '',
    },
  },
  {
    id: 3,
    name: '멍스테이',
    type: 'RELAX',
    path: '/programs?category=relax',
    introduction: {
      title: '참된 나를 찾는 여행,\n멍스테이',
      content: '멍스테이는 1,700년 한국 불교의 역사와 문화가 살아 숨쉬는 맑고 고요한 산사에서, 수행자의 일상과 더불어 우리 민족이 피워낸 지혜를 경험하는 전통 문화 체험 프로그램입니다.',
      thumbnail: '',
    },
  },
  {
    id: 4,
    name: '체험스테이',
    type: 'EXPERIENCE',
    path: '/programs?category=experience',
    introduction: {
      title: '참된 나를 찾는 여행,\n체험스테이',
      content: '체험스테이는 1,700년 한국 불교의 역사와 문화가 살아 숨쉬는 맑고 고요한 산사에서, 수행자의 일상과 더불어 우리 민족이 피워낸 지혜를 경험하는 전통 문화 체험 프로그램입니다.',
      thumbnail: '',
    },
  },
  {
    id: 5,
    name: '원데이클래스',
    type: 'ONE_DAY',
    path: '/programs?category=one-day',
    introduction: {
      title: '참된 나를 찾는 여행,\n원데이클래스',
      content: '원데이클래스는 1,700년 한국 불교의 역사와 문화가 살아 숨쉬는 맑고 고요한 산사에서, 수행자의 일상과 더불어 우리 민족이 피워낸 지혜를 경험하는 전통 문화 체험 프로그램입니다.',
      thumbnail: '',
    },
  },
];

export default CATEGORY_TYPE;
