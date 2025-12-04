import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BatchMasterService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://api.freeprojectapi.com/api';
  getAllBatch() {
    return this.http.get(`${this.baseUrl}/FeesTracking/batches`);
  }
  addBatch(data: any) {
    return this.http.post(`${this.baseUrl}/FeesTracking/batches`, data);
  }
  updateBatch(data: any) {
    return this.http.put(`${this.baseUrl}/FeesTracking/batches/${data?.batchId}`, data);
  }
}
