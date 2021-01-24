import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-study',
  templateUrl: './directives-study.component.html',
  styleUrls: ['./directives-study.component.scss']
})
export class DirectivesStudyComponent implements OnInit {

  books: string[];
  loaded: boolean;

  constructor() {
    this.books = ['Infinite Jest', 'The Color Purple'],
    this.loaded = false;
   }

  ngOnInit() {
  }

  load() {
    this.loaded = true;
  }

}
