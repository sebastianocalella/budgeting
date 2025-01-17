import { Routes } from '@angular/router';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { CategoriesComponent } from './components/categories/categories.component';

export const routes: Routes = [
  { path: 'expenses', component: ExpensesComponent },
  {path: 'categories', component: CategoriesComponent}
];
