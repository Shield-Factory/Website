import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilManagmentComponent } from './profil-managment.component';

describe('ProfilManagmentComponent', () => {
  let component: ProfilManagmentComponent;
  let fixture: ComponentFixture<ProfilManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
