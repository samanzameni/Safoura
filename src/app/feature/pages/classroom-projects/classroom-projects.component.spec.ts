import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomProjectsComponent } from './classroom-projects.component';

describe('ClassroomProjectsComponent', () => {
  let component: ClassroomProjectsComponent;
  let fixture: ComponentFixture<ClassroomProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassroomProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
