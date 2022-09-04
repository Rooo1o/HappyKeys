import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { virtuelepianoComponent } from './virtuelepiano.component';

describe('virtuelepianoComponent', () => {
  let component: virtuelepianoComponent;
  let fixture: ComponentFixture<virtuelepianoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ virtuelepianoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(virtuelepianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
