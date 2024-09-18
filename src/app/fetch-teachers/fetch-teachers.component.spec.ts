import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchTeachersComponent } from './fetch-teachers.component';

describe('FetchTeachersComponent', () => {
  let component: FetchTeachersComponent;
  let fixture: ComponentFixture<FetchTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchTeachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FetchTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
