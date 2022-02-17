import axios from 'axios';

export const useApi = (url: string) => {
    const baseURL = 'http://localhost:3000/api/';

    return {
        post: (entity) => axios.post(baseURL + url, entity)
    }
}