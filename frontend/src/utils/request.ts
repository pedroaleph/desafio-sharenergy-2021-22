import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:5000';

export default axios.create({
    baseURL: BASE_URL,
});
  