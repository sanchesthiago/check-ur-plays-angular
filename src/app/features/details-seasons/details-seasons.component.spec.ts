import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSeasonsComponent } from './details-seasons.component';

describe('EpisodesSeriesComponent', () => {
  let component: DetailsSeasonsComponent;
  let fixture: ComponentFixture<DetailsSeasonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsSeasonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsSeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
