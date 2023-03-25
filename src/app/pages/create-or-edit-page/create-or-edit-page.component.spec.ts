import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditPageComponent } from './create-or-edit-page.component';

describe('CreateOrEditPageComponent', () => {
  let component: CreateOrEditPageComponent;
  let fixture: ComponentFixture<CreateOrEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrEditPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOrEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
