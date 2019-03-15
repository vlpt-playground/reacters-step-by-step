import client from './client';

export const listPosts = (page = 1) => client.get(`/api/posts?page=${page}`);
export const read = id => client.get(`/api/posts/${id}`);
