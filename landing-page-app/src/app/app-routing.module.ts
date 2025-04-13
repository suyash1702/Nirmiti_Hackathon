import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HackathonResultsComponent } from './landing/hackathon-results/hackathon-results.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'hackathon-results', component: HackathonResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 