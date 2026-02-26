import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Avatar1Component } from './avatar1.component';

describe('Avatar1Component', () => {
  let component: Avatar1Component;
  let fixture: ComponentFixture<Avatar1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Avatar1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Avatar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
