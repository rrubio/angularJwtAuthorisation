import { Injectable } from '@angular/core';

@Injectable()
export class ConstantService {

  API_URL: any;
  CONSUMER_KEY: any;

  constructor() { 
    this.API_URL      = 'http://localhost:3000';
    this.CONSUMER_KEY = '';
  }

}
