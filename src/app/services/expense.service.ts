import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private baseUrl = 'http://localhost:3000/api/expenses';

  constructor(private http: HttpClient) {}

  getCurrentMonthExpenses(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/current-month`);
  }
}
