import axios from 'axios';

export const fetchApi = async (query, page) => {
  const options = {
    method: 'GET',
    url: `https://steam2.p.rapidapi.com/search/${query}/page/${page}`,
    headers: {
      'X-RapidAPI-Key': '1a00808260msh34628ee3f119e0cp154328jsn76ff4fa0e24d',
      'X-RapidAPI-Host': 'steam2.p.rapidapi.com',
    },
  };

  return await axios(options);
};
