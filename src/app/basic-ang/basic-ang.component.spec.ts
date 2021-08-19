import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAngComponent } from './basic-ang.component';

describe('BasicAngComponent', () => {
  let component: BasicAngComponent;
  let fixture: ComponentFixture<BasicAngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicAngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
