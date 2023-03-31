import axios from 'axios';

const SERVER_URL = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/`;

interface GET {
  endpoint: string;
  params?: string;
  queryString?: string;
}

interface POST {
  endpoint: string;
  body?: Object;
}

export async function get({ endpoint, params = '', queryString = '' }: GET) {
  console.log(`%cGET 요청 ${SERVER_URL}${endpoint}/${params}${queryString}`, 'color: #a25cd1;');

  return (
    axios.get(`${SERVER_URL}${endpoint}/${params}`),
    {
      headers: {
        Authorization: sessionStorage.getItem('userToken'),
      },
    }
  );
}

export async function post({ endpoint, body }: POST) {
  const bodyData = JSON.stringify(body);
  console.log(`%cPOST 요청:${SERVER_URL}${endpoint}`, 'color: #296aba;');
  console.log(`%cPOST 요청 데이터: ${bodyData}`, 'color: #296aba;');

  return axios.post(`${SERVER_URL}${endpoint}`, bodyData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: sessionStorage.getItem('userToken'),
    },
  });
}
