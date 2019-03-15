import client from './client';

export const listPosts = (page = 1) => client.get(`/api/posts?page=${page}`);
export const read = id => client.get(`/api/posts/${id}`);
export const write = ({ title, body }) =>
  client.post('/api/posts', { title, body });

export const update = (id, { title, body }) =>
  client.patch(`/api/posts/${id}`, { title, body });
export const remove = id => client.delete(`/api/posts/${id}`);
