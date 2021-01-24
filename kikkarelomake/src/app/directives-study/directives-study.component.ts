import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-study',
  templateUrl: './directives-study.component.html',
  styleUrls: ['./directives-study.component.scss']
})
export class DirectivesStudyComponent implements OnInit {

  books;

  constructor() {
    this.books = ['Infinite Jest', 'The Color Purple']
   }

  ngOnInit(): void {
  }

}
