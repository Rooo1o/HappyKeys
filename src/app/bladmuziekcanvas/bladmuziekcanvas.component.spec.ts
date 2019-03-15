import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VexflowcontentComponent } from './bladmuziekcanvas.component';

describe('VexflowcontentComponent', () => {
  let component: VexflowcontentComponent;
  let fixture: ComponentFixture<VexflowcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VexflowcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VexflowcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
