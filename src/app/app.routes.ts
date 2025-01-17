import { Routes } from '@angular/router';
import { ExpensesListComponent } from './components/expenses-list/expenses-list.component';

export const routes: Routes = [
  { path: 'expenses', component: ExpensesListComponent },
  { path: '', redirectTo: '/expenses', pathMatch: 'full' },
];
