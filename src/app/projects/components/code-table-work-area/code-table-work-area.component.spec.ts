import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeTableWorkAreaComponent } from './code-table-work-area.component';

describe('CodeTableWorkAreaComponent', () => {
  let component: CodeTableWorkAreaComponent;
  let fixture: ComponentFixture<CodeTableWorkAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeTableWorkAreaComponent]
    });
    fixture = TestBed.createComponent(CodeTableWorkAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
