import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionMoviesComponent } from './description-movies.component';

describe('DescriptionMoviesComponent', () => {
  let component: DescriptionMoviesComponent;
  let fixture: ComponentFixture<DescriptionMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionMoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
