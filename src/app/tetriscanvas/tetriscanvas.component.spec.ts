import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetriscanvascomponentComponent } from './tetriscanvas.component';

describe('TetriscanvascomponentComponent', () => {
  let component: TetriscanvascomponentComponent;
  let fixture: ComponentFixture<TetriscanvascomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TetriscanvascomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TetriscanvascomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
