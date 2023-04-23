import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'af13337ebb6d46a58738ddfa56783acf',
  },
});
