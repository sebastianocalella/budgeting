import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment';
import { Expense } from '@app/models/expense.interface';
import * as ArrayUtils from '@app/utils/operators';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getExpenses(year?: number, month?: number, day?: number): Observable<Expense[]> {
    let queryParams: string = "";
    const params: string[] = [];

    if (year) {
      params.push(`year=${year}`);
    }
    if (month) {
      params.push(`month=${month}`);
    }
    if (day) {
      params.push(`day=${day}`);
    }

    if (ArrayUtils.isNotEmpty(params)) {
      queryParams = `?${params.join("&")}`;
    }
    return this.http.get<Expense[]>(this.apiUrl+"/expenses"+queryParams);
  }

  getExpenseById(id: number): Observable<Expense> {
    return this.http.get<Expense>(`${this.apiUrl}/${id}`);
  }

  createExpense(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(this.apiUrl, expense);
  }

  updateExpense(id: number, expense: Expense): Observable<Expense> {
    return this.http.put<Expense>(`${this.apiUrl}/${id}`, expense);
  }

  deleteExpense(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
