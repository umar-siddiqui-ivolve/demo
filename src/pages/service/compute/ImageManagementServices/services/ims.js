import { request } from '../../../../../utils/request';
import config from '../../../../../utils/config';


const { endpoints, apiPrefix } = config;
const { ims } = endpoints;
export async function query(params) {
  
  return await request(ims, {
    method: 'get',
    data: params,
  }, apiPrefix);
}

export async function create({ data }) {

  
  return await request(ims, {
    method: 'post',
    data
  }, apiPrefix);
}

export async function patch({ data }) {
  
  return await request(ims, {
    method: 'patch',
    data
  }, apiPrefix);
}