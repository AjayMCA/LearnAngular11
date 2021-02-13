import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorExampleComponent } from './error-example.component';

describe('ErrorExampleComponent', () => {
  let component: ErrorExampleComponent;
  let fixture: ComponentFixture<ErrorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
