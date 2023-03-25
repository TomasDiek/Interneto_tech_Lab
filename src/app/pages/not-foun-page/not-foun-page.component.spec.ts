import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFounPageComponent } from './not-foun-page.component';

describe('NotFounPageComponent', () => {
  let component: NotFounPageComponent;
  let fixture: ComponentFixture<NotFounPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFounPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFounPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
