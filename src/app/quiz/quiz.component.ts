import {Component, OnInit} from '@angular/core';
import {QuestionsService} from "../questions.service";
import {IQuestion} from "../questions/question";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Store} from '@ngrx/store';
import {addAnswer} from "../store/store";
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: {showError: true},
  }],
})
export class QuizComponent implements OnInit {
  questions: IQuestion[] = [];
  form: any = {};
  stepperOrientation?: Observable<StepperOrientation>;

  constructor(
      private questionsService: QuestionsService,
      private store: Store<{ answers: any }>,
      private formBuilder: FormBuilder,
      private breakpointObserver: BreakpointObserver,
  ) {
  }

  ngOnInit(): void {
    this.getQuestions();
    this.getStepperOrientation();
  }

  /**
   * Get questions and create form controls
   */
  getQuestions(): void {
    this.questionsService
        .getQuestions()
        .subscribe(questions => {
          this.questions = questions;
          questions.forEach(question => {
            this.form[question.key] = this.formBuilder.group({
              field: new FormControl('', Validators.required),
            });
          })
        });
  }

  /**
   * Check if question is last one
   * @param questionId {number} ID of question
   */
  isLastQuestion(questionId: number): boolean {
    const lastQuestionId = this.questions[this.questions.length - 1].idx;

    return questionId === lastQuestionId;
  }

  /**
   * Save answers to store
   */
  saveValues(): void {
    const {form, questions} = this;

    questions.forEach(question => {
      this.store.dispatch(addAnswer({
        idx: question.idx,
        title: question.title,
        answer: form[question.key].get('field').value,
      }));
    });
  }

  /**
   * Responsive utility function for stepper
   */
  getStepperOrientation(): void {
    this.stepperOrientation = this.breakpointObserver
        .observe('(max-width: 768px)')
        .pipe(map(({matches}) => (matches ? 'vertical' : 'horizontal')));
  }
}
