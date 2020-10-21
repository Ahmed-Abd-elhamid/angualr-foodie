import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReactiveComponent } from './update-reactive.component';

describe('UpdateReactiveComponent', () => {
  let component: UpdateReactiveComponent;
  let fixture: ComponentFixture<UpdateReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
