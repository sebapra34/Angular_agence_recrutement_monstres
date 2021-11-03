import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonstersComponent } from './monsters/monsters.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MonsterDetailComponent } from './monster-detail/monster-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'monsters', component: MonstersComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: MonsterDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }