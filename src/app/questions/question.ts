/**
 * Question interface
 */
export interface IQuestion {
  idx: number;
  key: string;
  type: string;
  label: string;
  value?: string;
  title: string;
}

/**
 * Question class
 */
export class Question implements IQuestion {
  idx: number;
  key: string;
  type: string;
  label: string;
  value?: string;
  title: string;

  /**
   * Question constructor
   * @param options {object} Question class options
   * @param options.idx {number} Question index
   * @param options.key {string} Question key
   * @param options.type {string} Question type
   * @param options.label {string} Question label
   * @param options.value {string} Question value
   * @param options.title {string} Question title
   */
  constructor(options: IQuestion) {
    this.idx = options.idx;
    this.key = options.key;
    this.type = options.type;
    this.label = options.label;
    this.value = options.value || '';
    this.title = options.title;
  }
}
