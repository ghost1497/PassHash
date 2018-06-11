import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProgramComponent } from './program/program.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'program', component: ProgramComponent },
  { path: '**', component: PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
export const routingComponents = [HomeComponent, ProgramComponent]