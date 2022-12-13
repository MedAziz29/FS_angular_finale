import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnimateurComponent } from './add-animateur.component';

describe('AddAnimateurComponent', () => {
  let component: AddAnimateurComponent;
  let fixture: ComponentFixture<AddAnimateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAnimateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAnimateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
