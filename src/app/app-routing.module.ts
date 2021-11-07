import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {QuizComponent} from "./quiz/quiz.component";
import {SummaryComponent} from "./summary/summary.component";

const routes: Routes = [
  {path: '', component: HomeComponent,},
  {path: 'quiz', component: QuizComponent,},
  {path: 'result', component: SummaryComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
