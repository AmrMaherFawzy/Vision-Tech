import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WEBComponent } from './web.component';

describe('WEBComponent', () => {
  let component: WEBComponent;
  let fixture: ComponentFixture<WEBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WEBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WEBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
