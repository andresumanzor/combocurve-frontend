import axios from 'axios';

export const internalApiInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_INTERNAL_API_URL,
});

export const externalApiInstance = axios.create({
    baseURL: process.env.EXTERNAL_API_BASE_URL,
});
