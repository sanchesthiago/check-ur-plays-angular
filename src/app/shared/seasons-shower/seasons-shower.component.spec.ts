import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonsShowerComponent } from './seasons-shower.component';

describe('SeasonsShowerComponent', () => {
  let component: SeasonsShowerComponent;
  let fixture: ComponentFixture<SeasonsShowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeasonsShowerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonsShowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
