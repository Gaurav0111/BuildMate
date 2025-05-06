import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SldebarComponent } from './sldebar.component';

describe('SldebarComponent', () => {
  let component: SldebarComponent;
  let fixture: ComponentFixture<SldebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SldebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SldebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
