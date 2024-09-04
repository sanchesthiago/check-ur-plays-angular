import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsMoviesComponent } from './alerts-movies.component';

describe('AlertsMoviesComponent', () => {
  let component: AlertsMoviesComponent;
  let fixture: ComponentFixture<AlertsMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertsMoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertsMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
