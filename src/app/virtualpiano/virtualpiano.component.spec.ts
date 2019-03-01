import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualpianoComponent } from './virtualpiano.component';

describe('VirtualpianoComponent', () => {
  let component: VirtualpianoComponent;
  let fixture: ComponentFixture<VirtualpianoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualpianoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualpianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
