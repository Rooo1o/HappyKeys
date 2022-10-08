import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtuelepianoComponent } from './virtuelepiano.component';

describe('virtuelepianoComponent', () => {
  let component: VirtuelepianoComponent;
  let fixture: ComponentFixture<VirtuelepianoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtuelepianoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtuelepianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
