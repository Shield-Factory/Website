import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableVPNComponent } from './available-vpn.component';

describe('AvailableVPNComponent', () => {
  let component: AvailableVPNComponent;
  let fixture: ComponentFixture<AvailableVPNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableVPNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableVPNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
