import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetrominocomponentComponent } from './tetromino.component';

describe('TetrominocomponentComponent', () => {
  let component: TetrominocomponentComponent;
  let fixture: ComponentFixture<TetrominocomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TetrominocomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TetrominocomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
