import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParTvComponent } from './recherche-par-tv.component';

describe('RechercheParTvComponent', () => {
  let component: RechercheParTvComponent;
  let fixture: ComponentFixture<RechercheParTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheParTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheParTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
