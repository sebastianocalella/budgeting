import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-expenses-list',
  standalone: true,
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {
  expenses: any[] = [];
  currentMonth: string = '';

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.loadCurrentMonthExpenses();
  }

  loadCurrentMonthExpenses(): void {
    const now = new Date();
    this.currentMonth = now.toLocaleString('default', { month: 'long', year: 'numeric' }); // e.g., "January 2025"

    this.expenseService.getCurrentMonthExpenses().subscribe({
      next: (data) => {
        this.expenses = data;
      },
      error: (err) => console.error('Error fetching expenses:', err),
    });
  }
}
