import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesStudyComponent } from './directives-study.component';

describe('DirectivesStudyComponent', () => {
  let component: DirectivesStudyComponent;
  let fixture: ComponentFixture<DirectivesStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
