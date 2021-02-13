import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleHookExampleComponent } from './life-cycle-hook-example.component';

describe('LifeCycleHookExampleComponent', () => {
  let component: LifeCycleHookExampleComponent;
  let fixture: ComponentFixture<LifeCycleHookExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCycleHookExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleHookExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
