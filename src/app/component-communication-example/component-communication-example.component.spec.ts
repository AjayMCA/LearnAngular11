import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCommunicationExampleComponent } from './component-communication-example.component';

describe('ComponentCommunicationExampleComponent', () => {
  let component: ComponentCommunicationExampleComponent;
  let fixture: ComponentFixture<ComponentCommunicationExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCommunicationExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCommunicationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
