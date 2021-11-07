import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import QUESTIONS from "./questions/mock-data";
import {IQuestion} from "./questions/question";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  /**
   * Get questions from mocked data
   */
  getQuestions(): Observable<IQuestion[]> {
    return of(QUESTIONS);
  }
}
