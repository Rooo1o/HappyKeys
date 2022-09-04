import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TonesynthesizerComponent } from './tonesynthesizer.component';

describe('TonesynthesizerComponent', () => {
  let component: TonesynthesizerComponent;
  let fixture: ComponentFixture<TonesynthesizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TonesynthesizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TonesynthesizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
