import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryPageComponentComponent } from './entry-page-component.component';

describe('EntryPageComponentComponent', () => {
  let component: EntryPageComponentComponent;
  let fixture: ComponentFixture<EntryPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryPageComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
