import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationsMoviesComponent } from './informations-movies.component';

describe('InformationsMoviesComponent', () => {
  let component: InformationsMoviesComponent;
  let fixture: ComponentFixture<InformationsMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationsMoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationsMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
