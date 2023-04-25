import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoklistaComponent } from './boklista/boklista.component';
import { NewBookComponent } from './new-book/new-book.component';

const routes: Routes = [
  { path: '', redirectTo: '/boklista', pathMatch: 'full' },
  { path: 'boklista', component: BoklistaComponent },
  { path: 'new-book', component: NewBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
