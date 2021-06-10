import { Injectable, EventEmitter } from '@angular/core';
import { JOBS } from './../default-data';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  public defaultData: any;
  commonEmitter: EventEmitter<any> = new EventEmitter();
  constructor() {
  }

  getJobs() {
    return Promise.resolve(JOBS);
  }
}
