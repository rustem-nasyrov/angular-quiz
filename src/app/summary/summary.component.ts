import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import { IAnswer, selectAllValues} from "../store/store";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  answers: any = {};

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.getAnswers();
  }

  /**
   * Get and apply answers into component
   */
  getAnswers(): void {
    this.store.select(selectAllValues).subscribe(answers => this.answers = Object.values(answers))
  }
}
