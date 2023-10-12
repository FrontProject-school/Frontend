import { setInterceptors } from './common/interceptors';

const api = this.axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api