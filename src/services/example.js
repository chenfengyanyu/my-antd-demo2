import request from '/assets/utils/request';

export async function query() {
  return request('/api/users');
}
