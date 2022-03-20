import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
{path: "practice", component: PracticeComponent},
{path: "app", component: AppComponent}
];

@NgModule({
imports: [
RouterModule.forRoot(routes)
],
exports: [
RouterModule
],
declarations: []
})
export class AppRoutingModule { }