import {IQuestion, Question} from "./question";

const QUESTIONS: IQuestion[] = [
  new Question({
    idx: 1,
    key: 'question-1',
    type: 'text',
    label: 'Вопрос 1',
    title: 'Вопрос 1'
  }),
  new Question({
    idx: 2,
    key: 'question-2',
    type: 'text',
    label: 'Вопрос 2',
    title: 'Вопрос 2'
  }),
  new Question({
    idx: 3,
    key: 'question-3',
    type: 'text',
    label: 'Вопрос 3',
    title: 'Вопрос 3'
  }),
  new Question({
    idx: 4,
    key: 'question-4',
    type: 'text',
    label: 'Вопрос 4',
    title: 'Вопрос 4'
  }),
  new Question({
    idx: 5,
    key: 'question-5',
    type: 'text',
    label: 'Вопрос 5',
    title: 'Вопрос 5'
  }),
];

export default QUESTIONS;
