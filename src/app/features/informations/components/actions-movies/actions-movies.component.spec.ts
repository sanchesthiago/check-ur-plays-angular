import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsMoviesComponent } from './actions-movies.component';

describe('ActionsMoviesComponent', () => {
  let component: ActionsMoviesComponent;
  let fixture: ComponentFixture<ActionsMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionsMoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionsMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
