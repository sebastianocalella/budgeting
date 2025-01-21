import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { ExpenseService } from '@services/expense.service';
import { Expense } from '@app/models/expense.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expenses-table',
  imports: [CommonModule, MatTableModule],
  templateUrl: './expenses-table.component.html',
  styleUrl: './expenses-table.component.scss'
})
export class ExpensesTableComponent implements OnInit {
  constructor(private expenseService: ExpenseService) { }
  ngOnInit(): void {
    this.loadExpenses();
  }
  expenses: Expense[] = [];
  loading = false;
  error: string | null = null;
  displayedColumns = ['category', 'amount', 'date', 'description'];

  private loadExpenses(): void {
    this.loading = true;
    this.error = null;

    this.expenseService.getExpenses()
      .subscribe({
        next: (data) => {
          this.expenses = data;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Failed to load expenses. Please try again later.';
          this.loading = false;
          console.error('Error loading expenses:', error);
        }
      });
  }
}
