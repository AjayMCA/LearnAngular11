import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferencesExampleComponent } from './differences-example.component';

describe('DifferencesExampleComponent', () => {
  let component: DifferencesExampleComponent;
  let fixture: ComponentFixture<DifferencesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifferencesExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferencesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
