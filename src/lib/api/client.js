import axios from 'axios';

const client = axios.create();

export const setToken = token => {
  client.defaults.headers.common['Authorization'] = token;
};

// 프로덕션 환경에서는 현재 도메인이 아닌 외부 도메인에 요청하도록 합니다.
if (process.env.NODE_ENV === 'production') {
  client.defaults.baseURL = 'https://reacters.vlpt.us';
}

export default client;
