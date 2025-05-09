import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AxiosService {
  constructor() {
    axios.defaults.baseURL = 'localhost:8080';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }

  request(method: string, url: string, data: any): Promise<any> {
    return axios({
      method: method,
      url: url,
      data: data
    });
  }
}
