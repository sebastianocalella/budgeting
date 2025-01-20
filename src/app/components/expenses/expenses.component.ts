import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '@services/expense.service';
import { Expense } from '@models/expense.interface';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.scss'
})

export class ExpensesComponent implements OnInit {
  expenses: Expense[] = [];
  loading = false;
  error: string | null = null;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.loadExpenses();
  }

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
