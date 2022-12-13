import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTvsComponent } from './update-tvs.component';

describe('UpdateTvsComponent', () => {
  let component: UpdateTvsComponent;
  let fixture: ComponentFixture<UpdateTvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTvsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
