import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesSeriesComponent } from './episodes-series.component';

describe('EpisodesSeriesComponent', () => {
  let component: EpisodesSeriesComponent;
  let fixture: ComponentFixture<EpisodesSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpisodesSeriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodesSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
